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
    const [comboOne, setComboOne] = useState<Array<number>>([])
    const [comboTwo, setComboTwo] = useState<Array<number>>([])

    const onClick = (id: number) => {
        setTurn(!turn)
        const newState = state.map(el => el.id === id ? {...el, value: turn ? 'X' : 'O'} : el)
        setState(newState)
        if (!turn) {
            state.map((el, i) => el.id === id ? comboOne.push(i + 1) : '')
            setComboOne([...comboOne])
        }
    }
    const winningCombo = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9],
        [3, 6, 9],

    ]
    useEffect(() => {
        console.log('damir')
    }, [comboOne])
    console.log(comboOne)
    return (
        <div className="App">
            {state.map((el, i) => <div key={i} onClick={() => onClick(el.id)} className={'square'}>{el.value}</div>)}
            <div>
                turn:{!turn ? 'Player 1' : 'Player 2'}
            </div>

        </div>
    );
}

export default App;
