import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fibonacci from "./pages/Fibonacci";
import Strings from "./pages/Strings";
import PrimeNumbers from "./pages/PrimeNumbers";
import MultiplicationTable from "./pages/MultiplicationTable";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fibonacci" element={<Fibonacci />} />
        <Route path="/strings" element={<Strings />} />
        <Route path="/prime-numbers" element={<PrimeNumbers />} />
        <Route path="/multiplicationtable" element={<MultiplicationTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
