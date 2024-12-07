import React, { useState, useEffect } from 'react';
import { getAllExpenses } from '../services/api';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getAllExpenses();
        setExpenses(data);
      } catch (err) {
        console.error('Error fetching expenses:', err);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="expense-list">
      <h2>Expense History</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <p><strong>{expense.description}</strong></p>
            <p>Amount: ${expense.amount.toFixed(2)}</p>
            <p>Category: {expense.category}</p>
            <p>Date: {expense.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
