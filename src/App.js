import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { NewTransactions } from './components/NewTransactions';
import { History } from './components/History';
import {TransactionProvider} from './contexts/globalContext';
import {IncomeExpenses} from './components/IncomeExpenses';

function App() {
  return (
    <TransactionProvider>
      <div className="appbox">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <History/>
      <NewTransactions/>
      <br/>
      <center><footer>&copy; by Muhammad Tariq</footer></center>
      
      </div>
    </TransactionProvider>
    
  );
}

export default App;
