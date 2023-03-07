import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/animation.css";
import "react-toastify/dist/ReactToastify.css";
import ApologyPage from "./pages/ApologyPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LostPage from "./pages/LostPage";
import {
  URL_FRONT_ERROR_PAGE,
  URL_FRONT_HOME_PAGE,
  URL_FRONT_LOST_PAGE,
} from "./constants/urlsFront";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL_FRONT_HOME_PAGE} element={<HomePage />} />
        <Route path={URL_FRONT_LOST_PAGE} element={<LostPage />} />
        <Route path={URL_FRONT_ERROR_PAGE} element={<ErrorPage />} />
        <Route path="/:http_code" element={<ApologyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
