import {motion} from "framer-motion";
import Switcher from "./Switcher.jsx";
import {VscColorMode} from "react-icons/vsc";
import {AiOutlineInfoCircle} from "react-icons/ai";

export default function Settings({handleChangeTheme,isLightTheme}) {
   return (
      <>
         <motion.div
            className="absolute z-50 top-full right-0 min-w-[220px] rounded-md bg-bg-lighter shadow-2xl overflow-hidden"
         >
            <button className="bg-bg-darker select-none w-full flex items-center justify-between px-2 py-2.5 border-b-bg-lighter border-b-[1.5px]">
               <div className="flex items-center gap-1 capitalize text-[17px] text-txt-darker font-bold">
                  <VscColorMode size={20}/>
                  <span>theme</span>
               </div>
               <Switcher switcherEvent={handleChangeTheme} isCheked={isLightTheme}/>
            </button>
            <button className="bg-bg-darker w-full select-none flex items-center justify-between px-2 py-2.5">
               <div className="flex items-center gap-1 capitalize text-[17px] text-txt-darker font-bold">
                  <AiOutlineInfoCircle size={20}/>
                  <span>info</span>
               </div>
            </button>
         </motion.div>
      </>
   );
}
