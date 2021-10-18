import React from 'react'
import { Header } from './Header'
import { Filters } from './Filters'
import { CardGrid } from './CardGrid'

export const HomePage = () => {
    
    return (
        <>
            <div className="container">
                <Header />
                <Filters />
                <CardGrid />
            </div>  
        </>
    )
}