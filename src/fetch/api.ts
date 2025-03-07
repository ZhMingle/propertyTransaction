// api.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// 定义请求和响应的数据类型（根据你的 API 结构调整）
interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

// 创建一个 axios 实例
const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // 设置默认的后端 API 地址
  timeout: 10000, // 请求超时设置为 10秒
  headers: {
    "Content-Type": "application/json", // 默认请求头
  },
  withCredentials: true,
});

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 在请求发送之前，可以添加一些操作，如添加 token
    const token = localStorage.getItem("token"); // 假设你存储了 token 在 localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // 在请求头中添加 token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // 请求错误时，直接返回错误信息
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 处理错误响应，显示错误消息等
    if (error.response) {
      console.error("Error response:", error.response);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error); // 返回错误对象
  }
);

export default api;
