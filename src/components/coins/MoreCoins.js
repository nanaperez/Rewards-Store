import React, { useContext, useState } from 'react'
import { ContextValues } from '../context/Context'
import { ChestGame } from './ChestGame'
import buttonStart from '../../assets/icons/power-button.svg'
import buttonGreen from '../../assets/icons/power.svg'
import rules from '../../assets/icons/rules.png'
import Swal from 'sweetalert2'

export const MoreCoins = () => {

    const {user} = useContext(ContextValues)
    const {name, points } = user
    const [startGame, setStartGame] = useState(false)

    const handleStart = () =>{
        setStartGame(!startGame)
    }

    const handleClick = () => {
        Swal.fire({
            imageUrl: `${rules}`,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            text: 'Only 2 chests have coins, 1000, 5000 or 7500, you have only 2 opportunities, good luck!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }

    return (
      <>
        <div className="more-coins-div">
          <div className="align-center">
            <h1 className="history-title">Welcome to the game! <span className="color-f1d87d">Add more coins here!</span></h1>
            <button className="btn background-blue color-white" onClick={handleClick}>
              Rules
            </button>
          </div>
          <div className="user-coins">
                <p className="more-coins-userInfo"><span>{name}</span> you have <b>{points} coins </b></p>
          </div>
          <div className="game-rule-start">
            <h2 className="game-title">Lets go to <button className="btn-start" onClick={handleStart}><img src={(!startGame) ?buttonStart :buttonGreen}  alt="start" /></button> <span className="color-f1d87d">More Coins!</span></h2>
          </div>
          {
            (startGame)
              &&<ChestGame  setStartGame={setStartGame}/>
          }
        </div>
      </>
    )
}