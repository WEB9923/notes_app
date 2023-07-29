import {createContext, useState} from "react";


const ThemeContext = createContext(null);


export const ThemeContextProvider = ({children}) => {
   const [isDarkMode,setIsDarkMode] = useState(true);

   const handleChangeTheme = () => setIsDarkMode(!isDarkMode);


   const values = {
      isDarkMode,
      handleChangeTheme
   }

   return <ThemeContext.Provider value={values}>
      {children}
   </ThemeContext.Provider>
}

