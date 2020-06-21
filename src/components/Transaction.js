import React, { useContext } from 'react'
import { globalContext } from '../contexts/globalContext'
export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(globalContext);
    const sign = transaction.amount <0 ? '-' : '+';
    return (
        
        <div className="newtransactions">
                <li> 
                     <span>{transaction.desc}</span>
                     <span className={transaction.amount<0 ? "minus" : "plus"}> 
                     <button  onClick={()=>deleteTransaction(transaction.id)}>Delete</button>      
                         {sign}Rs.{Math.abs(transaction.amount)}</span>          
                 </li>
        </div>
    )
}
