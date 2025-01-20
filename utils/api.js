// utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Backend API URL'i
});

export default api;
