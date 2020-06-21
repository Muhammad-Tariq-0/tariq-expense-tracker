import React, { useContext } from 'react';
import { globalContext } from '../contexts/globalContext';

export const IncomeExpenses = () => {
  const { transactions } = useContext(globalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className="amountbox">
        <div>
          <h3>INCOME <br/> Rs.{income}</h3>
        </div>
        <div>
          <h3>EXPENSE <br/> Rs.{expense}</h3>

        </div>
      </div>
  )
}
