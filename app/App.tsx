import { NavBar, TotalExtract } from "./components";
import FormTableContainer from "./components/ExpenseTable/Transactions/FormTableContainer";
import "../app/App.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <NavBar />
      <TotalExtract />
      <FormTableContainer />
    </GlobalProvider>
  );
}

export default App;