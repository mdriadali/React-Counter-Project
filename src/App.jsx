import { useState } from "react";
import "./App.css";

function App() {
  let [count, setcount] = useState(0);
  const addValue = () => {
    if (count == 20) {
      setcount((count = 20));
    } else {
      setcount(count + 1);
    }

    console.log(count);
  };
  const removeValue = () => {
    if (count > 0) {
      setcount(count - 1);
    } else {
      setcount((count = 0));
    }
    console.log(count);
  };
  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter Vlue: {count} </h2>
      <button onClick={addValue}>Increase value</button>
      <br />
      <button onClick={removeValue}>decrease value</button>
    </>
  );
}

export default App;
