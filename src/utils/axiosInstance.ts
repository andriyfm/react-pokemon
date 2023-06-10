import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export default instance;
