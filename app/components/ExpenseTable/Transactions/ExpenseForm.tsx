import React, { useState } from "react";
import { useGlobalState } from "../../../context/GlobalState";
import "./ExpenseForm.css";

export const ExpenseForm = () => {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTransaction({
      id: window.crypto.getRandomValues(new Uint16Array(1))[0],
      description,
      amount: +amount, // Cualuier valor que reciba lo convierte a número
    });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input-description"
          type="text"
          placeholder="Ingresa tu gasto..."
          onChange={(event) => setDescription(event.target.value)}
        />

        <input
          className="input-amount"
          type="number"
          step={0.01}
          placeholder="00.00"
          onChange={(event) => setAmount(parseFloat(event.target.value))}
        />

        <button className="add-button">✅</button>
      </form>
    </div>
  );
};
