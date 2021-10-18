import React from 'react'

export const CardHistory = ({name, cost, category, createDate, img}) => {
    
    const {url} = img
    const cuttingDate = createDate.slice(0,10)
    const dateFormat = new Date(cuttingDate)
    const date = `${dateFormat.getDate()}/${dateFormat.getMonth()+1}/${dateFormat.getUTCFullYear()}`
    
    return (
        <>
            <div className="table">
                <div className="table-item">
                    <p>{date}</p>
                </div>
                <div className="table-item">
                    <p>{category}</p>
                </div>
                <div className="table-item">
                    <p>{name}</p>
                </div>
                <div className="table-item">
                    <p>{cost}</p>
                </div>
                <div className="table-item">
                    <img src={url} alt="nothing" />
                </div>
            </div>
        </>
    )
}