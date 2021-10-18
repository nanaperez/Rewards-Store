import React from 'react'
import { Link } from 'react-router-dom'

export const MenuItems = ({state}) => {

    return (
        <ul className={(state) ?"list-menu-items animate__animated animate__fadeInLeft" :"list-menu-items animate__animated animate__fadeOutLeft"}>
            <Link className="link background-bd6096" to="/">Home</Link>  
            <Link className="link background-5c2da0" to="/redeem">Redeem</Link>  
            <Link className="link background-f1d87d" to="/more-coins">Add Coins</Link>
        </ul>    
    )
}