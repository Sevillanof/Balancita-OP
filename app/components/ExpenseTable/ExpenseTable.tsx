import React, { useState } from "react";
import "./ExpenseTable.css";

const ExpenseTable = () => {
  const [expenses, setExpenses] = useState(["Comida", "Transporte"]);
  const [newExpense, setNewExpense] = useState("");

  function handleInputChange(event) {
    setNewExpense(event.target.value);
  }

  function addExpense() {
    if (newExpense.trim() !== "") {
      setExpenses((expenses) => [...expenses, newExpense]);
      setNewExpense("");
    }
  }

  function removeExpense(index) {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  }

  return (
    <div className="expense-table">
      <h1>Balancita⚖️</h1>
      <div>
        <input
          type="text"
          placeholder="Ingresa tu gasto..."
          value={newExpense}
          onChange={handleInputChange}
        />

        <button className="add-button" onClick={addExpense}>
          Guardar
        </button>
      </div>

      <ol>
        {expenses.map((expense, index) => (
          <li key={index}>
            <span className="text">{expense}</span>
            <button
              className="delete-button"
              onClick={() => removeExpense(index)}>
              X
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExpenseTable;
