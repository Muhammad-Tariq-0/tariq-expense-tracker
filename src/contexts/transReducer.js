export default (state,action)=>{
    switch(action.type){
     case 'delete_trans':
        return{ ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
     case 'add_trans':
        return{ 
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
          return state;
        
    }
}
