import {CounterContext} from "../../../context/Counter";
import React from "react";
const CounterOutput = () => {
    const value = React.useContext(CounterContext)

    return (
        <h3>Curren count : {value.counter}</h3>
    )
}

export default CounterOutput;