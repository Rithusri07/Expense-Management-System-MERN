import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";

function ExpenseList({ expenses }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredExpenses = selectedCategory === "All" 
    ? expenses 
    : expenses.filter(expense => expense.category === selectedCategory);

  return (
    <div>
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Groceries">Groceries</option>
        <option value="Gas Bill">Gas Bill</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Rent">Rent</option>
        <option value="Others">Others</option>
      </select>
<div className="expense-list">
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      ) : (
        <p>No expenses found in this category.</p>
      )}
      </div>
    </div>
  );
}

export default ExpenseList;
