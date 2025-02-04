import "./TotalExtract.css";
import { useGlobalState } from "../../context/GlobalState";

export const TotalExtract = () => {
  const { transactions } = useGlobalState();

  if (!transactions) return <div>Loading...</div>;

  const amounts = transactions.map((transaction) => transaction.amount);

  const totalAmount = amounts.reduce((acc, item) => (acc += item), 0);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="container-extract">
      <div>
        <h3>Ingresos :</h3>
        <h2>${income}</h2>
      </div>
      <div>
        <h3>Actual:</h3>
        <h2>${totalAmount}</h2>
      </div>
      <div>
        <h3>Gastos :</h3>
        <h2>${expense}</h2>
      </div>
    </div>
  );
};
