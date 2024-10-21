import { apiClient } from "./config"

export const apiGetAdverts = async () => apiClient.get("/products")//get all products