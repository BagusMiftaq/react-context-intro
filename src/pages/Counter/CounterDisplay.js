import CounterOutput from "./components/CounterOutput"
import CounterControl from "./components/CounterControl"
import React, {useContext} from "react";
import {CounterContext, CounterProvider} from "../../context/Counter";


const CounterControlContext = () =>{
    const value = useContext(CounterContext);

    return (
        <>
            <CounterControl label={"Decrement"} onClick={value.decrement}/>
            <CounterControl label={"Increment"} onClick={value.increment}/>
        </>
    )
}

const CounterDisplay= () => {

    return (
        <CounterProvider>
            <CounterOutput/>
            <CounterControlContext/>
        </CounterProvider>
    )
}

export default CounterDisplay;