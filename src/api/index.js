
import axios from '@/axios.js'

var api = {
  // 查询最近热门搜索
  searchHotWords(params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  // 搜索框列表数据获取
  getSearchList() {
    return axios.get('/api/meituan/header/search.json')
  },
  // 首页左侧导航条 导航数据
  getMenuList() {
    return axios.get('/api/meituan/index/nav.json')
  },
  // 首页下方（有格调内容区数据获取）
  resultsByKeywords() {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  // 用户登录
  login(params) {
    return axios.get('/api/meituan/login', params)
  },
  // 用户注册
  register(params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api
