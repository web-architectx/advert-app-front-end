import { apiClient } from "./config"

export const apiGetAdverts = async () => apiClient.get("/products?sort={%22createdAt%22%3A-1}")//get all products

export const apiPostAdverts = async (formData, token) => {
    try {
      // If using apiClient (assuming axios setup)
      const response = await apiClient.post("/products", formData, {
        headers: {
          'Authorization': `Bearer ${token}`, // Include token in the header
          'Content-Type': 'multipart/form-data', // Specify form data
        },
      });
  
      return response;
    } catch (error) {
      // Fallback to fetch if apiClient fails
      const fallbackResponse = await fetch('/products', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: formData,
      });
  
      if (!fallbackResponse.ok) {
        throw new Error('Network response was not ok');
      }
  
      return fallbackResponse;
    }
  };
  