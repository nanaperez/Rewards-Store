import React, { useContext } from 'react'
import { ButtonsNextPrev } from './ButtonsNextPrev'
import { ContextValues } from '../context/Context'

export const PageControl = () => {
    
    const {list,currentPage} = useContext(ContextValues)

    return (     
        <div className="page-control">
            <p className="font-ppal">Page # {(list.length > 16)?currentPage :1}</p>
            <ButtonsNextPrev /> 
        </div>
    )
}