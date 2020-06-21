import React,{useContext} from 'react'
import { globalContext } from '../contexts/globalContext'

export const Balance = () => {
    const { transactions } = useContext(globalContext);
   const amounts = transactions.map(transaction => transaction.amount);
   const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);
    return (
        <div>
            <h2><br/>Your Balance is:</h2>
            <h1 className="move"> Rs.{total}</h1>
            {/* <h2><br/><marquee>Your Balance is: {total}</marquee> </h2> */}
            </div>  

    )
}

