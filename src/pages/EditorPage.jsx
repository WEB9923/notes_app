import Header from "../components/Header.jsx";
import Wrapper from "../components/Wrapper.jsx";
import Editor from "../components/Editor.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import {BiSolidCheckCircle} from "react-icons/bi";
import Button from "../components/Button.jsx";
import {FiSave, FiTrash2} from "react-icons/fi";
import {useEffect, useState} from "react";
import {FaChevronLeft} from "react-icons/fa";
import {deleteN, getSingle, update} from "../services/API.js";
import {getFullDate} from "../utils/getFullDate.js";

export default function EditorPage() {
   const [isSuccessSaved, setIsSuccessSaved] = useState(false);
   const [isSuccessDeleted, setIsSuccessDeleted] = useState(false);
   const [data, setData] = useState(null);

   const {noteId} = useParams();
   const navigate = useNavigate();

   const getSingleNote = async (id) => {
      try {
         return await getSingle(id);
      } catch (err) {
         console.log(err);
      }
   }

   const updateNote = async () => {
      try {
         let editedData = {
            ...data,
            updatedAt: getFullDate(),
            "is-edited": true
         }
         const res =  await update(noteId, editedData)
         if(res) setIsSuccessSaved(true);
      } catch (err) {
         console.log(err);
      }
   }

   useEffect(() => {
      getSingleNote(noteId).then((res) => setData(res));
   }, [noteId]);

   const deleteNote = async () => {
      try {
         const res = await deleteN(noteId);
         if(res) {
            setIsSuccessDeleted(true);
            navigate("/");
         }
      } catch (err) {
         console.log(err);
      }
   }

   useEffect(() => {
      let timeOut = setTimeout(() => {
         setIsSuccessDeleted(false);
      },600)

      return () => clearTimeout(timeOut);
   },[isSuccessDeleted])

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
                     clickEvent={updateNote}
                     content={
                        isSuccessSaved ? <BiSolidCheckCircle size={20}/> : <FiSave size={20}/>
                     }
                     color={"g"}
                  />
                  <Button
                     clickEvent={deleteNote}
                     content={
                        isSuccessDeleted ? <BiSolidCheckCircle size={20}/> : <FiTrash2 size={20}/>
                     }
                     color={"r"}
                  />
               </div>
            </Header>
            <Wrapper>
               <Editor
                  titleVal={data?.["note-title"]}
                  noteContent={data?.["note-content"]}
                  changeNoteContent={(e) => {
                     setData({...data, "note-content": e.target.value})
                  }}
                  changeTitle={(e) => {
                     setData({...data, "note-title": e.target.value})
                  }}
               />
            </Wrapper>
         </div>
      </>
   );
}
