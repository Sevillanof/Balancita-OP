import { useGlobalState } from "../../../../context/GlobalState";
import "./ExpenseList.css";

export const ExpenseList = () => {
  const { transactions, deleteTransaction } = useGlobalState();

  if (transactions.length <= 0) return <div>Ingrese sus nuevos gastos</div>;

  console.log(transactions);

  return (
    <div className="container">
      {transactions.map((transaction) => (
        <table className="row-table" key={transaction.id}>
          <tr>
            <td className="row-description">{transaction.description}</td>
            <td className="row-category">{transaction.category}</td>
            <td className="row-amount">${transaction.amount}</td>
            <button
              className="delete-button"
              onClick={() => deleteTransaction(transaction.id)}>
              ✕
            </button>
          </tr>
        </table>
      ))}
    </div>
  );
};
