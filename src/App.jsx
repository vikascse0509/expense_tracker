import React, { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const addExpenses = () => {
    const description = prompt("Enter expense description:");
    const amount = parseFloat(prompt("Enter the amount:"));

    if (description && amount) {
      const newExpense = { description, amount };
      setExpenses([...expenses, newExpense]);
      setTotal(total + amount);
    }
  };

  const deleteExpenses = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setTotal(total - expenses[index].amount);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[beige] border border-gray-300 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Expense Tracker</h2>
        <button
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-500"
          onClick={addExpenses}
        >
          ADD EXPENSE
        </button>
      </div>
      <div className="mb-4">
        {expenses.map((expense, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-50 p-2 mb-2 rounded"
          >
            <div className="font-bold">{expense.description}</div>
            <div className="font-bold">₹{expense.amount}</div>
            <button
              className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => deleteExpenses(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <div className="text-right">
        <h3 className="text-lg font-semibold">Total Expense: ₹{total}</h3>
      </div>
    </div>
  );
}

export default App;
