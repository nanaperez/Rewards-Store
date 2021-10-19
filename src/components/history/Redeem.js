import React, { useContext, useEffect, useState } from 'react'
import { getProdUser } from '../../helpers/getProdUser'
import { CardHistory } from './CardHistory'
import { ContextValues } from '../context/Context'

export const Redeem = () => {
    
    const {user} = useContext(ContextValues)
    const {name,redeemHistory} = user
    const [history, setHistory] = useState([])
    
    useEffect(() => {
        getProdUser("history")
            .then(p => setHistory(p))
    }, [redeemHistory])
    
    return (
        <>
            <h1 className="history-title"><span className="color-blue">{name}</span> welcome to your purchase history!!</h1>
            <div className="history-table">
                <div className="table">
                    <div className="table-item"><h2>Date</h2></div>
                    <div className="table-item"><h2>Category</h2></div> 
                    <div className="table-item"><h2>Name</h2></div>
                    <div className="table-item"><h2>Price</h2></div>
                    <div className="table-item"><h2>Image</h2></div>
                </div>
                {
                    (history.length > 0)
                        &&history.map(product => (
                            <CardHistory key={product._id} {...product} />
                        )
                    ) 
                }
            </div>
        </>
    )
}