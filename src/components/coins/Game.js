import React, { useState } from 'react'
import treasure from '../../assets/icons/treasure.png'
import treasureOpen from '../../assets/icons/treasure-open.png'
import { randomNum } from '../../helpers/random'

export const Game = ({counter, setCounter, valor, setValor}) => {

    let abrir = false

    const [vibrar, setVibrar] = useState({
        vibrar1:null,
        vibrar2:null,
        vibrar3:null,
        vibrar4:null
    })
    
    const [chestOpen, setChestOpen] = useState({
        cofre1:false,
        cofre2:false,
        cofre3:false,
        cofre4:false
    })

    const {cofre1,cofre2,cofre3,cofre4} = chestOpen
    const {valor1,valor2,valor3,valor4} = valor
    const {vibrar1,vibrar2,vibrar3,vibrar4} = vibrar

    const cambiarClassName = () => {
         return "chest animate__animated animate__shakeX"
    }

    const handleClick = ({target}) =>{
        if(counter < 2){
            setVibrar({
                ...vibrar,
                [target.id]: true
            })
            setTimeout(() => {
                setVibrar({
                    ...vibrar,
                    [target.id]: false
                })
                setChestOpen({
                    ...chestOpen,
                    [target.alt] : !abrir
                })
            }, 1000);
            setValor({
                ...valor,
                [target.name] : randomNum()
            })
        }
        setTimeout(() => {
            setCounter(counter+1)
        }, 1500);
    }

    return (
        <div className="chest-grid animate__animated animate__fadeInUp">
            <div>
                <p className="color-f1d87d">{(cofre1) && valor1}</p>
                <button 
                className="btn-cofre" 
                disabled={cofre1} 
                onClick={(e) => handleClick(e)}>
                    <img 
                    name="valor1" 
                    className={(vibrar1) ?cambiarClassName() :"chest"}  
                    src={(cofre1) ?treasureOpen :treasure} 
                    alt="cofre1"
                    id="vibrar1"
                    />
                </button>
            </div>
            <div>
                <p className="color-f1d87d">{(cofre2) && valor2}</p>
                <button 
                className="btn-cofre"
                disabled={cofre2} 
                onClick={handleClick}>
                    <img 
                    name="valor2" 
                    className={(vibrar2) ?cambiarClassName() :"chest"}  
                    src={(cofre2) ? treasureOpen:treasure} 
                    alt="cofre2"
                    id="vibrar2"
                    />
                </button>
            </div>
            <div>
                <p className="color-f1d87d">{(cofre3) && valor3}</p>
                <button 
                className="btn-cofre" 
                disabled={cofre3} 
                onClick={handleClick}>
                    <img 
                    name="valor3" 
                    className={(vibrar3) ?cambiarClassName() :"chest"} 
                    src={(cofre3) ? treasureOpen:treasure} 
                    alt="cofre3"
                    id="vibrar3"
                    />
                </button>
            </div>
            <div>
                <p className="color-f1d87d">{(cofre4) && valor4}</p>
                <button 
                className="btn-cofre" 
                disabled={cofre4} 
                onClick={handleClick}>
                    <img 
                    name="valor4" 
                    className={(vibrar4) ?cambiarClassName() :"chest"} 
                    src={(cofre4) ? treasureOpen:treasure} 
                    alt="cofre4"
                    id="vibrar4"
                    />
                </button>  
            </div>
      </div>
    )
}