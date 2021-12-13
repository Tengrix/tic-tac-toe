import React, {useEffect, useState} from 'react';
import './App.css';

type initialStateType = {
    id: number;
    value: string | null
}
const initialState = Array(9).fill({}).map(el => ({id: Math.random() * 10, value: null}))

function App() {
    const [state, setState] = useState<initialStateType[]>(initialState)
    const [turn, setTurn] = useState<boolean>(false)
    const [steps, setSteps] = useState<number>(0)

    const onClick = (id: number) => {
        setTurn(!turn)
        const newState = state.map(el => el.id === id ? {...el, value: turn ? 'X' : 'O'} : el)
        setState(newState)
        setSteps(steps+1)
    }
    const winnerCheck = () => {
        const winningCombo = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],

        ]
        for(let i = 0; i < winningCombo.length; i++){
            let [a,b,c] = winningCombo[i]
            if(state[a].value===state[b].value && state[b].value===state[c].value) return state[a].value
        }
        return null
    }
    const startAgain = () => {
        setState(initialState)
        setTurn(false)
    }
    const winner = winnerCheck()
    console.log(steps)
    return (
        <div className="App">
            {state.map((el, i) => <div key={i} onClick={() => onClick(el.id)} className={'square'}>{el.value}</div>)}
            <div>
                {winner===null? <p>Next: {!turn?'Player 1':'Player 2'}</p> : steps===9 ?<p>Winner: {'Friendship'}</p>:<p>Winner: {winner}</p>  }
                {winner !== null && <button onClick={startAgain}>start again</button>}
            </div>
        </div>
    );
}

export default App;
