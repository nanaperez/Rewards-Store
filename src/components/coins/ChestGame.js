import React, { useEffect, useState } from 'react'
import spinner from '../../assets/icons/loading.gif'
import { CalcTotal } from '../../helpers/CalcTotal'
import { Game } from './Game'
import { GameResult } from './GameResult'

export const ChestGame = ({setStartGame}) => {

    const [loading, setLoading] = useState(false)
    const [counter, setCounter] = useState(0)
    const [total, setTotal] = useState(0)
    const [value, setValue] = useState({
        value1:0,
        value2:0,
        value3:0,
        value4:0
    })
    
    useEffect(() => {
        if(counter === 2){
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 1800);
            setTotal(CalcTotal(value))
        }
    }, [counter,value])

    return (
        <>
        {
            (counter < 2)
            ?<Game counter={counter} setCounter={setCounter} value={value} setValue={setValue} />
            :(!loading)
                ?<GameResult total={total} setStartGame={setStartGame}/>
            :<div className="loading-result">
                <img className="loading margin-0-auto" src={spinner} alt="loading"/>
            </div>
        }
        </>
    )
}