
export default function Editor({titleVal,noteContent,changeTitle,changeNoteContent}) {
   return (
      <>
         <div className="w-full h-full flex flex-col rounded-md overflow-hidden">
            <input
               value={titleVal}
               onChange={changeTitle}
               type="text"
               placeholder="enter title..."
               className="h-14 bg-bg-lighter rounded-b-none border-none outline-none border-b-txt-inputText p-2 text-txt-lighter text-xl font-bold placeholder:text-txt-inputText"
            />
            <textarea
               value={noteContent}
               onChange={changeNoteContent}
               className="h-full bg-bg-lighter resize-none rounded-t-none pt-4 p-2 border-none outline-none text-txt-darker text-[16px] font-medium placeholder:text-txt-inputText"
               placeholder="enter note text..."
            />
         </div>
      </>
   );
}
