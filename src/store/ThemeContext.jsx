import {createContext, useEffect, useState} from "react";
export const ThemeContext = createContext(null);
export const ThemeContextProvider = ({children}) => {
   const [isLightTheme,setIsLightTheme] = useState(true);
   const handleChangeTheme = () => {
      setIsLightTheme((prev) => {
         const newTheme = !prev;
         localStorage.setItem("lightTheme", newTheme.toString());
         return newTheme;
      });
   }
   useEffect(() => {
      const storedTheme = localStorage.getItem("lightTheme");
      setIsLightTheme(storedTheme === "true");
   }, []);
   const values = {
      isLightTheme,
      handleChangeTheme
   }
   return <ThemeContext.Provider value={values}>
      {children}
   </ThemeContext.Provider>
}

