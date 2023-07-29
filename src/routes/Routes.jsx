import {createBrowserRouter} from "react-router-dom";
import EditorPage from "../pages/EditorPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import Layout from "./Layout.jsx";
import NewNote from "../pages/NewNote.jsx";
import SearchPage from "../pages/SearchPage.jsx";

export const Routes = createBrowserRouter([
   {
      path:"/",
      element:<Layout/>,
      children:[
         {path:"/",element:<HomePage/>},
         {path:"/note/:noteId", element:<EditorPage/>},
         {path:"/search", element:<SearchPage/>},
         {path:"/new-note", element:<NewNote/>},
      ]
   }
]);
