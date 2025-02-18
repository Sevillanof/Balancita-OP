import React from "react";
import { useGlobalState } from "../../../../context/GlobalState";
import "./ExpenseList.css";

export const ExpenseList = () => {
  const { transactions, deleteTransaction } = useGlobalState();

  if (transactions.length <= 0) return <div>Ingrese sus nuevos gastos</div>;

  console.log(transactions);

  return (
    <div className="container">
      {transactions.map((transaction) => (
        <div className="row-div" key={transaction.id}>
          <span>{transaction.description}</span>
          <p>${transaction.amount}</p>
          <button
            className="delete-button"
            onClick={() => deleteTransaction(transaction.id)}>
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};
