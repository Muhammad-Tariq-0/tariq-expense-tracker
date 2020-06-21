import React,{useContext} from 'react'
import { globalContext } from '../contexts/globalContext'

export const Balance = () => {
    const { transactions } = useContext(globalContext);
   const amounts = transactions.map(transaction => transaction.amount);
   const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);
    return (
            <h2>Your Balance: Rs.{total}</h2>

    )
}

