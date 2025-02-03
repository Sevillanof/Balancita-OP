import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

interface Transaction {
  id: number;
  description: string;
  amount: number;
}
interface GlovalState {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: number) => void;
}

interface GlobalProviderProps {
  children: React.ReactNode;
}

const initialState = {
  transactions: [],
  addTransaction: () => {},
  deleteTransaction: () => {},
};

export const Context = createContext<GlovalState>(initialState);

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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
