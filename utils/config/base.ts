const base = "https://fakestoreapi.com";
import axios from "axios";

const baseAxios = axios.create({
  baseURL: base,
});

export default baseAxios;
