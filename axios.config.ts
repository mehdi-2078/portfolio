import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://nodejs-test.iran.liara.run/',
  // baseURL: 'https://localhost:3000/',
  // timeout: 20000,
  // headers: { 'Content-Type': 'application/json' },
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
