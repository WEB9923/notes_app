export default function Search({value, handleSearchValue,handleSubmitSearchForm}) {
   return (
      <>
         <div
            className="w-full h-8 z-50 mb-5"
         >
            <form
               onSubmit={handleSubmitSearchForm}
               className="w-full h-full"
            >
               <input
                  value={value}
                  onChange={handleSearchValue}
                  type="text"
                  placeholder="search with title and press enter.."
                  className="w-full h-full rounded-md px-3 bg-bg-lighter border-none outline-none text-txt-inputText placeholder:text-txt-inputText"
               />
            </form>
         </div>
      </>
   );
}
