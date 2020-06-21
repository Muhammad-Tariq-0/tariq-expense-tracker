import React, { createContext,useReducer } from 'react'
import transReducer from './transReducer'
const initialtrans = {
    transactions: [] 
}
export const globalContext = createContext(initialtrans);

export const TransactionProvider = ({children})=> {
    const [state, dispatch] = useReducer(transReducer, initialtrans);
     //actions
     function deleteTransaction(id){
     dispatch({
       type: 'delete_trans',
       payload: id  
     })
     }
     function addTransaction(transaction){
        dispatch({
          type: 'add_trans',
          payload: transaction  
        })
        }
    return(
        <globalContext.Provider value={{
           transactions: state.transactions,
           deleteTransaction,
           addTransaction
        }}>
            {children}
        </globalContext.Provider>
    )
}
