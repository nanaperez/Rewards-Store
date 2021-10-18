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
            imageWidth: 400,
            imageHeight: 100,
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
          <h1 className="more-coins-title">Welcome to <span className="color-f1d87d">More Coins</span></h1>  
          <div className="user-coins">
                <p className="more-coins-userInfo"><span className="color-266894">{name}</span> you have {points} coins </p>
          </div>
          <div className="game-roules-start">
            <h2 className="game-title">Lets go to play <span className="color-f1d87d">More Coins!</span></h2>
            <button 
                className="btn background-15dbff color-white margin-top-10"
                onClick={handleClick}
                > 
                Rules <i className="fas fa-scroll rules" />
            </button>
            <button className="btn-start" onClick={handleStart}><img src={(!startGame) ?buttonStart :buttonGreen}  alt="start" /></button>
          </div>
          {
              (startGame)
                    &&<ChestGame  setStartGame={setStartGame}/>
          }
        
        </div>
        </>
    )
}