import axios from "axios";

const api_base = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default api_base;
