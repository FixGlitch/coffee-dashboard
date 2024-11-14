import axios from "axios";

export interface User {
  id: string;
  email: string;
  fullName: string;
}

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get("/api/users");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

export const getUserById = async (id: string): Promise<User> => {
  try {
    const response = await axios.get(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch user with ID ${id}:`, error);
    throw error;
  }
};

export const createUser = async (userData: Omit<User, "id">): Promise<User> => {
  try {
    const response = await axios.post("/api/users", userData);
    return response.data;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error;
  }
};

export const updateUser = async (
  id: string,
  userData: Partial<User>
): Promise<User> => {
  try {
    const response = await axios.put(`/api/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Failed to update user with ID ${id}:`, error);
    throw error;
  }
};

export const deleteUser = async (id: string): Promise<void> => {
  try {
    await axios.delete(`/api/users/${id}`);
  } catch (error) {
    console.error(`Failed to delete user with ID ${id}:`, error);
    throw error;
  }
};
