import React from 'react'
import { HomePage } from '../components/home/HomePage';
import { Navbar } from '../components/home/Navbar';
import { Redeem } from '../components/history/Redeem';
import { MoreCoins } from '../components/coins/MoreCoins';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

export const AppRouter = () => {
    
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/redeem" component={Redeem} />
                    <Route exact path="/more-coins" component={MoreCoins} /> 
                    <Redirect to="/" />
                </Switch>  
            </Router>  
        </>
    )
}