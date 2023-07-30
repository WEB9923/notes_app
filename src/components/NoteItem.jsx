import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {MdUpdate} from "react-icons/md";
import {RiMenuAddLine} from "react-icons/ri";

// eslint-disable-next-line react/prop-types
export default function NoteItem({data, index}) {
   return (
      <>
         <motion.div
            initial={{
               opacity: 0,
               y: 50
            }}
            animate={{
               opacity: 1,
               y: 0
            }}
            transition={{
               duration: 0.4,
               type: "spring",
               stiffness: 150,
               delay: 0.08 * index
            }}

            className="w-full max-h-24 h-auto rounded-md bg-bg-lighter px-2 py-1 my-2"
         >
            <Link to={`/note/${data?.id}`} className="w-full h-full select-none">
               <div>
                  <h1 className="line-clamp-1 font-bold text-xl text-txt-darker">
                     {data?.["note-title"]}
                  </h1>
               </div>
               <div>
                  <p className="line-clamp-2 text-txt-lighter font-medium text-sm">{data?.["note-content"]}</p>
               </div>
               <div className="flex gap-2 items-center mt-1">
                  <p className="text-xs text-txt-inputText py-0.5 px-1.5 rounded-md bg-bg-darker w-fit font-medium gap-x-0.5 flex items-center"><RiMenuAddLine
                     size={16}/>{data?.["createdAt"]}</p>
                  {data?.["is-edited"] && <><p
                     className="text-xs text-txt-inputText py-0.5 px-1.5 rounded-md bg-bg-darker w-fit font-medium gap-x-0.5 flex items-center"><MdUpdate
                     size={17}/> {data?.updatedAt}</p></>}
               </div>
            </Link>
         </motion.div>
      </>
   );
}
