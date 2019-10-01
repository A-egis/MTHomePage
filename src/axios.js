import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com'
// 拦截器 在请求或响应被 then 或 catch 处理前拦截它们。
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.params = {
    ...config.params,
    appkey: 'Aegis_1554515541668'
  }
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
