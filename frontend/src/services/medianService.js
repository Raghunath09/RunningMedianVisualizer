import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1/median",
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

