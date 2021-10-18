import React from 'react'
import headerImg from '../assets/images/header-x1.png'
import shoppingCart from '../assets/icons/buy-blue.svg'
import coin from '../assets/icons/coin.svg'

export const Header = () => {
    return (
        <div className="header">
            <img src={headerImg} alt="header" />
            <h1>Welcome to Rewards Store</h1>
            <img src={shoppingCart} alt="shopping cart" />
            <div className="div-coin">
                <img src={coin} alt="coin" />
            </div>
        </div>
    )
}