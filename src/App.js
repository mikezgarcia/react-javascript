import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fibonacci from "./pages/Fibonacci";
import Strings from "./pages/Strings";
import PrimeNumbers from "./pages/PrimeNumbers";
import MultiplicationTable from "./pages/MultiplicationTable";
import SumofNaturalNumber from "./pages/SumofNaturalNumber";
import SumofDigits from "./pages/SumofDigits";
import Numberwithin from "./pages/Numberwithin";
import Trianglerendered from "./pages/Trianglerendered";
import Isotriangle from "./pages/Isotriangle";
import NumberTriangle from "./pages/NumberTriangle";
import GetLargestInput from "./pages/GetLargestInput";
import CountVowels from "./pages/CountVowels";
import NumberIso from "./pages/NumberIso";

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
        <Route path="/sumofnatural" element={<SumofNaturalNumber />} />
        <Route path="/sumofdigits" element={<SumofDigits />} />
        <Route path="/numberwithin" element={<Numberwithin />} />
        <Route path="/trianglerendered" element={<Trianglerendered />} />
        <Route path="/isotriangle" element={<Isotriangle />} />
        <Route path="/numbertriangle" element={<NumberTriangle />} />
        <Route path="/getlargest" element={<GetLargestInput />} />
        <Route path="/countvowels" element={<CountVowels />} />
        <Route path="/numberisotriangle" element={<NumberIso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
