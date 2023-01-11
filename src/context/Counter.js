import React from "react";


//1. menyiapkan komponen contextnya
export const CounterContext = React.createContext(null);

//2. menyiapkan provider sebagai jembatan agar komponen lain bisa menggunakan conteks
export const CounterProvider = ({children}) =>{
    const [counter, setCounter] = React.useState(0);

    const increment =()=> setCounter(counter+1);
    const decrement =()=> setCounter(counter-1);

    const value = React.useMemo(()=>({
        counter, increment, decrement
    }), [counter]);

    return(
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}
