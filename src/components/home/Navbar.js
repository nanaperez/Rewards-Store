import React, { useContext, useEffect, useState } from 'react'
import { getProdUser } from '../../helpers/getProdUser'
import { ContextValues } from '../context/Context'
import { MenuItems } from './MenuItems'

export const Navbar = () => {

    const {user} = useContext(ContextValues)
    const {name, points} = user
    const [openMenu, setOpenMenu] = useState(false)
    const [state, setState] = useState(false)

    const handleClick = () => {
        if(openMenu){
            setTimeout(() => {
                setOpenMenu(!openMenu)
            }, 500);
        }else setOpenMenu(!openMenu)
        setState(!state)
    }

    const classNameSelect = () => {
        if(openMenu){
            return {
               i: "fas fa-angle-double-right margin-left-5",
               button:"btn-menu background-15dbff"
            }
        }else return{
            i:"fas fa-angle-double-right margin-left-5 animation1 ",
            button:"btn-menu animation2"
        } 
    }

    useEffect(() => {
        getProdUser("user")
    }, [points])
    
    return (
        <div className="data-user">
            <div className="logo-box">
                <button className={classNameSelect().button} onClick={handleClick}>Menu <i className={classNameSelect().i}></i></button>
            {
                (openMenu)
                    &&<MenuItems state={state} />
            }   
            </div>
            <div className="user-box">
                <i className="fas fa-user"></i>
                <p className="name-user">{name}</p>
                <div className="coins">
                    <p>{points}</p>
                    <i className="fas fa-coins"></i>
                </div>
            </div>
        </div>
    )
}