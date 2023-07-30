import {RouterProvider} from "react-router-dom";
import {Routes} from "./routes/Routes.jsx";
import {ThemeContextProvider} from "./store/ThemeContext.jsx";

export default function App() {
  return (
    <>
       <ThemeContextProvider>
          <RouterProvider router={Routes}/>
       </ThemeContextProvider>
    </>
  )
}

