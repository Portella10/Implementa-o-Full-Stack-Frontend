// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",  // URL do backend
});

// Função para criar um evento
export const createEvent = async (event) => {
  try {
    const response = await api.post("/eventos", event);
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

// Função para buscar eventos
export const getEvents = async () => {
  try {
    const response = await api.get("/eventos");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
