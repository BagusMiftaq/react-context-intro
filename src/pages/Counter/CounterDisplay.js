import CounterOutput from "./components/CounterOutput"
import CounterControl from "./components/CounterControl"
import React from "react";


const CounterDisplay= () => {

    const [counter, setCounter] = React.useState(0);

    const increment = () => setCounter(counter +1);
    const decrement = () => setCounter(counter-1);


    return (
        <>
        <CounterOutput value={counter}/>
            <CounterControl label={"Decrement"} onClick={decrement}/>
            <CounterControl label={"Increment"} onClick={increment}/>
        </>
    )
}

export default CounterDisplay;