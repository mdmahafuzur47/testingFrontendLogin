import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://server.s.mdmahafuzur.top/api/v1",
  // baseURL: "http://localhost:5001/api/v1",
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    console.log("Request Interceptor:", config);
    // You can add headers, modify the request, etc.
    //   config.headers.Authorization = "Bearer YOUR_ACCESS_TOKEN";
    return config;
  },
  function (error) {
    // Do something with the request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with the response data
    console.log("Response Interceptor:", response);
    return response;
  },
  function (error) {
    // Do something with the response error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors
      console.log("Unauthorized error");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
