import "./TotalExtract.css";
import { useGlobalState } from "../../../context/GlobalState";
import { formatCurrency } from "../../../utils/formatCurrency";

export const TotalExtract = () => {
  const { transactions } = useGlobalState();
  
  const income = transactions
  .filter((item) => item.category === 'Ingreso')
  .map((transaction) => transaction.amount)
  .reduce((acc, item) => (acc += item), 0)

  const expense = transactions
  .filter((item) => item.category !== 'Ingreso')
  .map((transaction) => transaction.amount)
  .reduce((acc, item) => (acc += item), 0)

  const totalAmount = income - expense;


  return (
    <div className="extract-container">
      <div className="extract-grid">
        <div className="extract-item">
          <h3 className="extract-title">Ingresos</h3>
          <h2 className={`extract-value income-value`}>
            {`$${income}`} 

          </h2>
        </div>

        <div className="extract-item">
          <h3 className="extract-title">Actual</h3>
          <h2 className={`extract-value total-value`}>
          {`$${totalAmount}`} 

          </h2>
        </div>

        <div className="extract-item">
          <h3 className="extract-title">Gastos</h3>
          <h2 className={`extract-value expense-value`}>
          {`$${expense}`} 
      
          </h2>
        </div>
      </div>
    </div>
  );
};
