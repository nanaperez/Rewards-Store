import React, { useContext } from 'react'
import { ContextValues } from '../context/Context'

export const ButtonsNextPrev = () => {

    const {list, currentPage, nextPage, previousPage} = useContext(ContextValues)

    return (
        <>
            {
            (currentPage > 1)
                ?<div className="page-control-buttons">
                    <button 
                        onClick={previousPage} 
                        className="color-15dbff"
                    >
                        <i className={(list.length < 16) ?"fas fa-chevron-left" :"fas fa-chevron-left color-darkgrey"}></i>
                    </button>
                    <button 
                        disabled={true} 
                        onClick={nextPage} 
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                :<div className="page-control-buttons">  
                    <button 
                        disabled={true} 
                        onClick={previousPage}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button 
                        onClick={nextPage}
                        disabled={(list.length < 16) ?true :false}
                    >
                        <i className={(list.length < 16) ?"fas fa-chevron-right" :"fas fa-chevron-right color-darkgrey"}></i>
                    </button> 
                </div>
            }   
        </>
    )
}