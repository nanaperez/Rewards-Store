import React, { useContext, useEffect, useState } from 'react'
import { FilterCategory } from '../../helpers/FilterCategory'
import { ButtonsNextPrev } from './ButtonsNextPrev'
import { ContextValues } from '../context/Context'

export const Filters = () => {

    const {list, setList, setLoading, indexOfLast, filterPriceLow, filterPriceHigh} = useContext(ContextValues)

    const [category, setCategory] = useState(undefined)
    const [all, setAll] = useState([])
    const [selectList, setSelectList] = useState(false)
    const [selectItem, setSelectItem] = useState("Category")

    useEffect(() => {
        if(list.length === 32){
            setAll(list)
        }
    }, [list])

    const handleClick = () =>{
        setSelectList(!selectList)
    }

    useEffect(() => {
        if(category !== undefined){
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setList(FilterCategory(all,category))
            }, 1500); 
        } 
    }, [category])
    
    const clickValue = ({target}) =>{
        setCategory(target.value)
        setSelectItem(target.value)
    }
    
    return (
        <div className="filters-data">
            <div className="number-pagination">
                <p className="ff-source-sans-pro">{(list.length===32)?indexOfLast :list.length} of {list.length} products</p>
            </div>
            <div className="filters">
                <p className="ff-source-sans-pro sort-by">&nbsp;&nbsp;Sort by: </p>
                <div className="btn background-15dbff " onClick={handleClick}> <p className="ff-source-sans-pro cat">{(selectItem === "All") ?"Category" :selectItem}</p><i className={(selectList)?"fas fa-chevron-up arrow" :"fas fa-chevron-down arrow"}></i>
                    <ul className={(selectList) ? "listStyle":"display-none"}>
                        <li>
                            <option value="All" onClick={clickValue}>All</option>
                        </li>
                        <li>
                            <option value="Tablets" onClick={clickValue}>Tablets</option>
                        </li>
                        <li>
                            <option value="Computing" onClick={clickValue}>Computing</option>
                        </li>
                        <li >
                            <option value="Phones" onClick={clickValue}>Phones</option>
                        </li>
                        <li >
                            <option value="Gaming" onClick={clickValue}>Gaming</option>
                        </li>
                        <li>
                            <option value="Audio" onClick={clickValue}>Audio</option>
                        </li>
                    </ul>
                </div>
                <button className="btn background-d8d7d7" onClick={filterPriceLow}>Lowest Price</button>
                <button className="btn background-d8d7d7" onClick={filterPriceHigh}>Highest Price</button>
            </div>
            <ButtonsNextPrev />          
        </div>
    )
}