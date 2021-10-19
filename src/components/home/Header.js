import React from 'react'
import headerImg from '../../assets/images/header-x1.png'

export const Header = () => {
    return (
        <div className="header">
            <div className="img-header">
                <h1 className="title-page">Welcome to <span> Rewards Store</span></h1>
                <img src={headerImg} alt="header" />
            </div>
        </div>
    )
}