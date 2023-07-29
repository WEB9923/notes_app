import {motion} from "framer-motion";
import {ButtonTouchAnimation} from "../animations/ButtonTouchAnimation.js";

// eslint-disable-next-line react/prop-types
export default function Button({content,clickEvent,color}) {
   return (
      <>
         <motion.button
            onClick={clickEvent}
            variants={ButtonTouchAnimation}
            initial={"initial"}
            whileTap={"animate"}
            className={`${color === "r" && "red"} ${color === "g" && "green"} w-10 h-10 shadow-md rounded-md bg-bg-lighter flex items-center justify-center text-txt-lighter`}
         >
            {content}
         </motion.button>
      </>
   );
}
