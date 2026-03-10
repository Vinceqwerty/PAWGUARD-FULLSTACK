import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Dogs from "./pages/Dogs";
import HealthRecords from "./pages/HealthRecords";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/dogs" element={<Dogs />} />

        <Route path="/health" element={<HealthRecords />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;