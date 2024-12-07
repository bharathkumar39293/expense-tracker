import React from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="app-container">
      <Header />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
