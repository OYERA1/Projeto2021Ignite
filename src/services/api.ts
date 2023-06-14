import axios from "axios";

export const api = axios.create({
  baseURL: process.env.VERCEL_URL || "http://127.0.0.1:3000",
});
