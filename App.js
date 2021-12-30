import { useState } from 'react';
import './App.css';

function App() {
  const[text,setText]=useState("")
  const[lim,setlim]=useState(0);
  function ABC(e){
    setText(e.target.value)
  }
  function limit(e){
      setlim(e.target.value)
  }
  return (
    <div className="App">
      Char Limit:-<input type="number" onChange={limit}></input>
      <input type="text" onChange={ABC()} ></input><br></br>
      <h3>{text}</h3>
    </div>
  )
}

export default App;
