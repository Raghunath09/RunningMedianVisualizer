import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const addNumber = (number) =>
  API.post("/add", {
    number,
  });

export const getMedian = () =>
  API.get("");

export const getStatistics = () =>
  API.get("/statistics");

export const getHeaps = () =>
  API.get("/heaps");

export const getHistory = () =>
  API.get("/history");

export const resetData = () =>
  API.delete("/reset");

export const getChartData = () =>
  API.get("/chart");