import axios from "axios";

const apiClient = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_STRAPI_URL}/api`,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
  },
});

export const getUserByEmail = (email: string) =>
  apiClient.get("/user-lists?filters=[email][$eq]=" + email);

export const createNewUser = (userData: any) =>
  apiClient.post("user-lists", { data: userData });
