import React, {useContext} from 'react'
import { globalContext } from '../contexts/globalContext'
import {Transaction} from './Transaction'

export const History = () => {
    const { transactions } = useContext(globalContext);
    return (
        <>
            <h2>History</h2>
          <hr/>
          <ul >
             {transactions.map(transaction=>  
                   (<Transaction key={transaction.id} transaction = {transaction}/>))}
             
          </ul>
        </>
    )
}
