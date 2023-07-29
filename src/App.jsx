import {RouterProvider} from "react-router-dom";
import {Routes} from "./routes/Routes.jsx";


export default function App() {

  return (
    <>
      <RouterProvider router={Routes}/>
    </>
  )
}

