import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/animation.css";
import ApologyPage from "./pages/ApologyPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LostPage from "./pages/LostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lost" element={<LostPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/:http_code" element={<ApologyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
