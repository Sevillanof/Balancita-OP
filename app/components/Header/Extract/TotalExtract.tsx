import "./TotalExtract.css";
import { useGlobalState } from "../../../context/GlobalState";
import { formatCurrency } from "../../../utils/formatCurrency";

export const TotalExtract = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const totalAmount = amounts.reduce((acc, item) => (acc += item), 0);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  if (!transactions) return <div>Loading...</div>;

  return (
    <div className="extract-container">
      <div className="extract-grid">
        <div className="extract-item">
          <h3 className="extract-title">Ingresos</h3>
          <h2 className={`extract-value income-value`}>
            {formatCurrency(income)}
          </h2>
        </div>

        <div className="extract-item">
          <h3 className="extract-title">Actual</h3>
          <h2 className={`extract-value total-value`}>
            {formatCurrency(totalAmount)}
          </h2>
        </div>

        <div className="extract-item">
          <h3 className="extract-title">Gastos</h3>
          <h2 className={`extract-value expense-value`}>
            {formatCurrency(expense)}
          </h2>
        </div>
      </div>
    </div>
  );
};
