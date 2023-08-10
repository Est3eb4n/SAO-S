import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
function App() {
  const [num, setnum]=useState(0)
  const [total, settotal]=useState(0)
  const suma = () => {setnum(num+1)}
  const resta = () => {setnum(num-1)}
  const tota = () => {settotal(0 > 10)}

  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={()=>suma()}>+</button>
      <button onClick={()=>resta()}>-</button>
    </div>
  );
}

export default App;
