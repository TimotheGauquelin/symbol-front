import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LostPage from "./pages/LostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lost" element={<LostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
