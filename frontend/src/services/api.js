import axios from "axios";

const api = axios.create({
  baseURL: "/mock-api",
  timeout: 8000,
});

export default api;
