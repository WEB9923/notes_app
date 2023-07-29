import Header from "../components/Header.jsx";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Button from "../components/Button.jsx";
import {FaChevronLeft} from "react-icons/fa";
import Wrapper from "../components/Wrapper.jsx";
import Search from "../components/Search.jsx";
import {useEffect, useState} from "react";
import {getSearchedNotes} from "../services/API.js";
import notFound from "../assets/not-found.svg";
import search from "../assets/search.svg";
import NoteItem from "../components/NoteItem.jsx";
import {AiOutlineClear} from "react-icons/ai";

export default function SearchPage() {
   const [searchValue, setSearchValue] = useState("");
   const [data, setData] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();

   const handleSearchValue = (e) => setSearchValue(e.target.value);

   const handleSubmitSearchForm = (e) => {
      e.preventDefault();
      navigate({
         pathname: location.pathname,
         search: `?note-title=${searchValue}`
      });
   }

   const handleClearSearchParams = () => {
      navigate({
         pathname: location.pathname,
         search: ""
      })
   }

   const getSearchNotes = async () => {
      try {
         if(location.search) {
            return await getSearchedNotes(location.search);
         }
      } catch (err) {
         console.log(err)
      }
   }

   useEffect(() => {
      getSearchNotes().then((res) => {
         setData(res);
      })
   },[location.search])

   return (
      <>
         <div className="h-screen">
            <Header>
               <Button
                  content={<Link to={"/"}>
                     <FaChevronLeft size={20}/>
                  </Link>}
               />
               <Button
                  content={<AiOutlineClear size={20}/>}
                  color={"r"}
                  clickEvent={handleClearSearchParams}
               />
            </Header>
            <Wrapper>
               <Search
                  handleSearchValue={handleSearchValue}
                  value={searchValue}
                  handleSubmitSearchForm={handleSubmitSearchForm}
               />
               {data === undefined || data === null || data.length === 0 ? <Image/>
                  : data?.map((item) => {
                  return (
                     <NoteItem
                        key={item.id}
                        data={item}
                     />
                  )
               })}
            </Wrapper>
         </div>
      </>
   );
}

function Image() {

   return (
      <>
         {<div className="absolute pointer-events-none flex flex-col items-center gap-y-3 w-2/3 md:w-1/3 left-1/2 top-1/2 select-none transform -translate-x-1/2 -translate-y-1/2">
            <img
               src={`${!location.search ? search : notFound}`}
               alt="image"
               className="w-full h-full object-center object-contain"
            />
            <div>
               <h1 className="text-txt-darker capitalize text-xl font-extrabold text-center">{`${!location.search ? "search note with title!" : "note not found!"}`}</h1>
            </div>
         </div>}
      </>
   )
}
