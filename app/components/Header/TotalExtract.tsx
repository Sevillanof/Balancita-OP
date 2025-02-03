import "./TotalExtract.css";
import { useGlobalState } from "../../context/GlobalState";

export const TotalExtract = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const totalAmount = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="container-extract">
      <h3>TotalExtract :</h3>
      <h1>${totalAmount}</h1>
    </div>
  );
};
