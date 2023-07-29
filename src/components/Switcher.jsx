

export default function Switcher({switcherEvent, isCheked}) {
   return (
      <>
            <input
               type="checkbox"
               onChange={switcherEvent}
               checked={isCheked}
               className="checkbox"
            />
      </>
   );
}

