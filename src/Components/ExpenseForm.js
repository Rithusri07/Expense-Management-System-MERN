import React, { useState } from "react";
import "./Expense.css";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Groceries");
 const [date,setDate]=useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && amount.trim()) {
      onAddExpense({ 
        title, 
        amount: parseFloat(amount), 
        category,
        id: Date.now() 
      });
      setTitle("");
      setAmount("");
      setCategory("Groceries");
      setDate("");
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select placeholder="Type" value={category} onChange={(e) => setCategory(e.target.value)} >
        <option value="Groceries">Groceries</option>
        <option value="Gas Bill">Gas Bill</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Rent">Rent</option>
        <option value="Others">Others</option>
      </select>
      <input type="date"
      onChange={(e) => setDate(e.target.value)}
      value={date}
      required></input>
      <button type="submit" >Add Expense</button>
    </form>
  );
}
export default ExpenseForm;
