import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});


// ======================
// PRODUCT API
// ======================

export const getProducts = async () => {

  const response = await API.get("/products");

  return response.data;

};

export const getProductDetail = async (
  id: number
) => {

  const response = await API.get(
    `/products/${id}`
  );

  return response.data;

};


// ======================
// AUTH API
// ======================

export const registerUser = async (
  data: {
    name: string;
    email: string;
    password: string;
  }
) => {

  const response = await API.post(
    "/register",
    data
  );

  return response.data;

};

export const loginUser = async (
  data: {
    email: string;
    password: string;
  }
) => {

  const response = await API.post(
    "/login",
    data
  );

  return response.data;

};