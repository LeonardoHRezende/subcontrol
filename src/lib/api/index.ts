import axios from "axios";

export const bffApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BFF_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
