import axios, { AxiosInstance } from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL ?? "https://api.flowpay.app";

export const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
