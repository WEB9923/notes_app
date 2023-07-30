import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import {BiSearch} from "react-icons/bi";
import {Link} from "react-router-dom";
import {AiOutlineSetting} from "react-icons/ai";
import {useContext, useEffect, useState} from "react";
import {getAllNote} from "../services/API.js";
import NoteItem from "../components/NoteItem.jsx";
import firstNoteImage from "../assets/first-note.svg";
import {LuEdit} from "react-icons/lu";
import {AnimatePresence, motion} from "framer-motion";
import {ButtonTouchAnimation} from "../animations/ButtonTouchAnimation.js";
import Wrapper from "../components/Wrapper.jsx";
import Settings from "../components/Settings.jsx";
import {ThemeContext} from "../store/ThemeContext.jsx";

export default function HomePage() {
   const [notes, setNotes] = useState([]);

   const ctx = useContext(ThemeContext);

   const {handleChangeTheme} = ctx;
   const {isLightTheme} = ctx;
   console.log(isLightTheme)
   const getAll = async () => {
      try {
         return await getAllNote();
      } catch (err) {
         console.log(err);
      }
   }

   useEffect(() => {
      getAll().then((res) => setNotes(res));
   }, []);

   return (
      <>
         <div className="h-screen">
            <Header>
               <h1 className="select-none capitalize font-extrabold text-4xl text-txt-darker">
                  notes
               </h1>
               <div
                  className="items-center flex h-full gap-2"
               >
                  <Button
                     content={<Link to={"/search"} className="w-full h-full flex items-center justify-center">
                        <BiSearch size={20}/>
                     </Link>}
                  />
                  <Button
                     content={
                        <AiOutlineSetting size={20}/>
                     }
                  />
               </div>
               <AnimatePresence>
                  <Settings
                     handleChangeTheme={handleChangeTheme}
                     isLightTheme={isLightTheme}
                  />
               </AnimatePresence>
            </Header>
            <Wrapper>
               {notes === undefined ||
               notes === null ||
               notes.length === 0 ? <FirstNoteImage/>
                  : notes?.sort((a, b) => b.id - a.id).map((item,index) => {
                  return (
                     <NoteItem
                        key={item.id}
                        data={item}
                        index={index}
                     />
                  )
               })}
               <motion.button
                  variants={ButtonTouchAnimation}
                  initial={"initial"}
                  whileTap={"animate"}
                  className="w-11 h-11 shadow-lg select-none rounded-md fixed bottom-6 right-3 bg-bg-lighter"
               >
                  <Link
                     to={"/new-note"}
                     className="w-full h-full flex items-center justify-center text-txt-lighter"
                  >
                     <LuEdit size={22}/>
                  </Link>
               </motion.button>
            </Wrapper>
         </div>
      </>
   );
}


function FirstNoteImage() {
   const [isShowImage,setIsShowImage] = useState(false);

   useEffect(() => {
      let timeOut = setTimeout(
         () => setIsShowImage(true),700
      );

      return () =>
         clearTimeout(timeOut);

   }, [isShowImage]);

   return (
      <>
         {isShowImage && <motion.div
            initial={{
               opacity:0
            }}
            animate={{
               opacity:1
            }}
            transition={{
               duration:0.3,
               type:"spring",
               stiffness:100
            }}
            className="absolute pointer-events-none flex flex-col items-center gap-y-3 w-2/3 md:w-1/3  select-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
         >
            <img
               src={firstNoteImage}
               alt="image"
               className="w-full h-full object-center object-contain"
            />
            <div>
               <h1 className="text-txt-darker capitalize text-xl font-extrabold text-center">create your first note!</h1>
            </div>
         </motion.div>}
      </>
   )
}
