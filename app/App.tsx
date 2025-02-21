import { ExpenseList, ExpenseForm, NavBar, TotalExtract } from "./components";
import "../app/App.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <NavBar />
      <TotalExtract />
      <ExpenseForm />
      <ExpenseList />
    </GlobalProvider>
  );
}

export default App;