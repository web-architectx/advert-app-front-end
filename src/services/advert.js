import { apiClient } from "./config"

export const apiGetAdverts = async () => apiClient.get("/products/")//get all products


// export const apiUpdateAdverts = async (productId, updateData) => {
//   const response = await apiClient.patch(`/products/${productId}`, updateData);
//   // Handle the response (e.g., check for success, extract updated data)
// }; 
// export const apiDeleteAdvert = async (productId) => {
//   const response = await apiClient.delete(`/products/${productId}`);
//   return response;  
// };


 

export const apiGetAdvertById = async (productId) => {
  try {
    const token = localStorage.getItem("token"); // or your token source
    const response = await apiClient.get(`/products/${productId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching advert by ID:", error);
    throw error;
  }
};


export const apiDeleteAdvert = async (advertId) => {
  const token = localStorage.getItem('token'); // Replace with your method of retrieving the token
  return await apiClient.delete(`/products/${advertId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const apiUpdateAdverts = async (advertId, data) => {
  return await apiClient.patch(`/adverts/${advertId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

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
  