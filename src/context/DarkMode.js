import React, {useState} from "react";

export const DarkContext = React.createContext(null);

export const DarkProvider = ({children}) =>{
    const [dark, setDark] = useState(false);
    const [theme, setTheme] = useState("light")
    const toggle = () =>{
        setDark(!dark);
        setTheme("Dark")
    }

    return(
        <DarkContext.Provider value={{dark, toggle, theme}}>
            {children}
        </DarkContext.Provider>
    )
}