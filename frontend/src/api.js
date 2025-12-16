import axios from "axios";

const api = axios.create({
  baseURL: "https://event-ticketing-backend-mwa6.onrender.com/api",
});

export default api;
