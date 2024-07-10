import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SalesProvider } from "./context/SalesContext";
import SelectCashierPage from "./pages/SelectCashierPage";
import SalesDashboardPage from "./pages/SalesDashboardPage";
import AddSalePage from "./pages/AddSalePage";
import { AppContainer } from "./components";
import { useEffect } from "react";
import { sales } from "./data/mock-data";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("sales")) {
      localStorage.setItem("sales", JSON.stringify(sales));
    }
  }, []);

  return (
    <SalesProvider>
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/" element={<SelectCashierPage />} />
            <Route path="/dashboard" element={<SalesDashboardPage />} />
            <Route path="/add-sale" element={<AddSalePage />} />
          </Routes>
        </Router>
      </AppContainer>
    </SalesProvider>
  );
}

export default App;
