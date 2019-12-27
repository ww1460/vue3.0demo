// 添加请求拦截器，在请求头中加token
import axios from 'axios'
axios.defaults.baseURL ="http://rap2api.taobao.org/"
axios.defaults.timeout = 5000

// 请求拦截器
axios.interceptors.request.use(
  request => {
    // request.headers['X-Token'] = "xxx-asjdksaj"
    return request;
  },
  error => {
    alert("请求超时")
    return Promise.reject(error);
  });

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  });
export default axios
