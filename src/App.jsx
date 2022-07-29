import "./App.css";
import { useContext } from "react";
import { CounterContext } from "./Providers/counter";

export const App = () => {
  const { counter, addNumber, subNumber } = useContext(CounterContext);

  return (
    <div className="App">
      <header className="App-header">
        {counter}
        <button onClick={addNumber}>+</button>
        <button onClick={subNumber}>-</button>
      </header>
    </div>
  );
};
