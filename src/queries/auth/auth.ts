/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "../../axios/Interceptors";

export const createUserMutationFn = async (credentials: any) => {
  const response = await axiosInstance.post("/user/register", credentials);
  return response.data;
};


export const loginUserMutationFn = async (credentials:any)  => {
  // axiosInstance.defaults.withCredentials=true;
  const response = await axiosInstance.post("/user/login", credentials);
  return response.data;
}