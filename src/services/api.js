import axios from "axios";

const api = axios.create({
  withCredential: true,
  baseURL: "http://desafioonline.webmotors.com.br/api",
});

export default api;
