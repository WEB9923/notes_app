import Header from "../components/Header.jsx";
import {Link} from "react-router-dom";
import {FaChevronLeft} from "react-icons/fa";
import Button from "../components/Button.jsx";
import Wrapper from "../components/Wrapper.jsx";
import Editor from "../components/Editor.jsx";
import {useEffect, useState} from "react";
import {addNewNote} from "../services/API.js";
import {BiSolidCheckCircle} from "react-icons/bi";
import {RiMenuAddLine} from "react-icons/ri";
import {getFullDate} from "../utils/getFullDate.js";

export default function NewNote() {
   const [titleValue, setTitleValue] = useState("");
   const [noteContentValue, setNoteContentValue] = useState("");
   const [isSuccessSaved, setIsSuccessSaved] = useState(false);

   const handleChangeTitleValue = (e) => setTitleValue(e.target.value);
   const handleChangeNoteContentValue = (e) => setNoteContentValue(e.target.value);

   const handleAddNewNote = async () => {
      try {
         let data = {
            "note-title": titleValue,
            "note-content": noteContentValue,
            createdAt: getFullDate(),
            updatedAt: null,
            "is-edited": false
         }
         if (
            (!titleValue ||
               titleValue === "" ||
               titleValue === null ||
               titleValue === undefined
            )
            || (!noteContentValue ||
               noteContentValue === "" ||
               noteContentValue === null ||
               noteContentValue === undefined
            )
         ) return false;

         let res = await addNewNote(data);

         if (res) setIsSuccessSaved(true);

      } catch (err) {
         console.log(err);
      }
   }

   useEffect(() => {
      let timeOut = setTimeout(
         () => setIsSuccessSaved(false), 2000
      );
      return () => clearTimeout(timeOut);
   }, [isSuccessSaved])

   return (
      <>
         <div className="h-screen">
            <Header>
               <Button
                  content={<Link to={"/"} className="w-full h-full flex items-center justify-center">
                     <FaChevronLeft size={20}/>
                  </Link>}
               />
               <div className="flex items-center h-full gap-2">
                  <Button
                     clickEvent={handleAddNewNote}
                     content={
                        isSuccessSaved ? <BiSolidCheckCircle size={20}/> : <RiMenuAddLine size={20}/>
                     }
                     color={isSuccessSaved && "g"}
                  />
               </div>
            </Header>
            <Wrapper>
               <Editor
                  titleVal={titleValue}
                  noteContent={noteContentValue}
                  changeTitle={handleChangeTitleValue}
                  changeNoteContent={handleChangeNoteContentValue}
               />
            </Wrapper>
         </div>
      </>
   );
}
