import {motion} from "framer-motion";

export default function Header({children}) {
   return (
      <>
         <motion.header
            initial={{
               scaleY:0,
               opacity:0
            }}
            animate={{
               scaleY:1,
               opacity:1
            }}
            transition={{
               duration:0.2,
               type:"spring",
               stiffness:60
            }}
            className="select-none origin-top relative flex items-center h-[60px] justify-between"
         >
            {children}
         </motion.header>
      </>
   );
}
