import axios from "axios";

const api_base = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export default api_base;
