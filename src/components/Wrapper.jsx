

export default function Wrapper({children}) {
   return (
      <>
         <div
            className="h-[calc(100vh-60px)] pt-4 pb-3 overflow-y-auto relative scroll-smooth scrollbar-thumb-txt-inputText"
         >
            {children}
         </div>
      </>
   );
}
