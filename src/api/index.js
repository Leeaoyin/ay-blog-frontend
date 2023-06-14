import axios from 'axios';
import store from './store';

export default class request {
    constructor(baseURL) {
      this.instance = axios.create({
        baseURL,
      });
  
      // 添加请求拦截器
      this.instance.interceptors.request.use(
        (config) => {
          // 在发送请求前做些什么
          const token = store.get('token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          console.log('HTTP Request:', config);
          return config;
        },
        (error) => {
          // 对请求错误做些什么
          console.error('HTTP Request error:', error);
          return Promise.reject(error);
        },
      );
  
      // 添加响应拦截器
      this.instance.interceptors.response.use(
        (response) => {
          // 对响应数据做点什么
          console.log('HTTP Response:', response);
          return response.data;
        },
        (error) => {
          // 对响应错误做点什么
          console.error('HTTP Response error:', error);
          return Promise.reject(error);
        },
      );
    }
  
    async get(url, params) {
      const response = await this.instance.get(url, { params });
      return response;
    }
  
    async post(url, data) {
      const response = await this.instance.post(url, data);
      return response;
    }
  
    async put(url, data) {
      const response = await this.instance.put(url, data);
      return response;
    }
  
    async delete(url) {
      const response = await this.instance.delete(url);
      return response;
    }
  }
  