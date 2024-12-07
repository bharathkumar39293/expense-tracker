import axios from 'axios';

const API_URL = 'http://localhost:3001/api/expenses';

// Fetch all expenses
export const getAllExpenses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new expense
export const addExpense = async (expenseData) => {
  await axios.post(API_URL, expenseData);
};
