import axios from 'axios';

export const createProduct = async (productData: { name: string; price: number; description?: string }) => {
  try {
    const response = await axios.post('/api/products', productData);
    return response.data;
  } catch (error) {
    console.error("Failed to create product:", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get('/api/products');
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

export const getProductById = async (productId: string) => {
  try {
    const response = await axios.get(`/api/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error;
  }
};

export const updateProduct = async (productId: string, updatedData: { name?: string; price?: number; description?: string }) => {
  try {
    const response = await axios.put(`/api/products/${productId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Failed to update product:", error);
    throw error;
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const response = await axios.delete(`/api/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete product:", error);
    throw error;
  }
};
