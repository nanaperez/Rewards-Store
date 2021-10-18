import React, { useEffect, useState } from 'react'
import { ContextValues } from './context/Context'
import { AppRouter } from '../routes/AppRouter'
import { paginator } from '../hooks/paginator'
import { getProdUser } from '../helpers/getProdUser'

export const App = () => {

    const [list, setList, currentList, currentPage, indexOfLast, loading, setLoading, nextPage, previousPage, filterPriceLowers, filterPriceHigh] = paginator()
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
            filterPriceLowers,
            filterPriceHigh
        }}>
            <AppRouter />
        </ContextValues.Provider>
    )
}