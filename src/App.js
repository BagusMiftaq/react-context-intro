import './App.css';
import CounterDisplay from "./pages/Counter/CounterDisplay";
import {useContext} from "react";
import {DarkContext, DarkProvider} from "./context/DarkMode";

function App() {

    const value = useContext(DarkContext);

    return (
        <DarkProvider>
            <div className='App'>
                <button onClick={value.toggle}>{value.theme}</button>
                <CounterDisplay/>
            </div>
        </DarkProvider>
    );
}

export default App;
