import axios from "axios";

const api = axios.create({ baseURL: "https://sakura-bank-api.onrender.com" });

export default api;
