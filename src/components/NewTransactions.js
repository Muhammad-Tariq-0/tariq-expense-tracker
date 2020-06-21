import React, {useState, useContext} from 'react'
import { globalContext } from '../contexts/globalContext';

export const NewTransactions = () => {
    const {addTransaction} = useContext(globalContext);
    let [desc, setdesc] = useState('');
    let [amount, setamount] = useState(0);

     const handleAddition = e =>{
       e.preventDefault(); 
        const newTransaction = {
            id: Math.floor(Math.random()*1000000),
            desc,
            amount: +amount
        }
        addTransaction(newTransaction);
      }
    return (
        <div>
            <h2>Add Transaction</h2>
       <hr/>
       <form className="trascAdd" onSubmit={handleAddition}>
           <label>
               Transaction Name: </label>
               <input type="text" placeholder="Enter Trasaction Discription"
                value={desc} onChange={(e)=>setdesc(e.target.value)}/>
            
           <br/>
           <br/>
           <label>
               Amount: put (+ sign) with Income and (- sign) with Expense 
           </label>
               <input type="number" placeholder="Enter Amount of Transaction" 
                value={amount} onChange={(e)=>setamount(e.target.value)}/>
           
           <br/> <br/> <br/>
           <input className="button" type="Submit" />  
       </form>
        </div>
    )
}
