import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [ticTacToe,setTicTacToe] = useState<number>(9)
  const [state, setState] = useState<Array<number>>([])
  useEffect(()=>{
    for(let i = 0; i < ticTacToe; i++){
      state.push(i)
    }
    setState([...state])
  },[])
  return (
    <div className="App">
      {state.map(el=> <div className={'square'}>{el}</div>)}
    </div>
  );
}

export default App;
