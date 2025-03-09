import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

interface Transaction {
  id: number;
  date: string;
  category: string;
  description: string;
  amount: number;
}
interface GlobalState {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: number) => void;
}

interface GlobalProviderProps {
  children: React.ReactNode;
}

const initialState: GlobalState = {
  transactions: [],
  addTransaction: () => {},
  deleteTransaction: () => {},
};

export const Context = createContext<GlobalState>(initialState);

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? { transactions: JSON.parse(localData) } : initialState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state]);

  const addTransaction = (transaction: Transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  const deleteTransaction = (id: number) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}>
      {children}
    </Context.Provider>
  );
};
