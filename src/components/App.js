import React, { useEffect, useState } from 'react'
import { ContextValues } from './context/Context'
import { AppRouter } from '../routes/AppRouter'
import { usePagination } from '../hooks/usePagination'
import { getProdUser } from '../helpers/getProdUser'

export const App = () => {

    const [list, setList, currentList, currentPage, indexOfLast, loading, setLoading, nextPage, previousPage, filterPriceLow, filterPriceHigh] = usePagination()
    const [user, setUser] = useState({})

    useEffect(() => {
        getProdUser("user")
            .then( userInfo => setUser(userInfo))
    }, [])
    
    return (
        <ContextValues.Provider value={{
            user,
            setUser,
            list,
            setList,
            currentList,
            currentPage,
            indexOfLast,
            loading,
            setLoading,
            nextPage,
            previousPage,
            filterPriceLow,
            filterPriceHigh
        }}>
            <AppRouter />
        </ContextValues.Provider>
    )
}