import { useGlobalState } from "../../../context/GlobalState";
import "./ExpenseList.css";

export const ExpenseList = () => {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div className="container">
      {transactions.map((transaction) => (
        <div className="row-div" key={transaction.id}>
          <span>{transaction.description}</span>
          <p>{transaction.amount}</p>
          <button
            className="delete-button"
            onClick={() => deleteTransaction(transaction.id)}>
            X{" "}
          </button>
        </div>
      ))}
    </div>
  );
};
