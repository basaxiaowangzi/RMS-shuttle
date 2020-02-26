import axios from 'axios'
import { getToken, clearToken } from './token'
import { message } from 'antd'
import NProgress from 'nprogress'
let loadingArr = []
const config = {
  production: '/',
  develop: '/',
  test: '/',
}

const baseURL = !config[process.env.PACKAGE] ? config['develop'] : config[process.env.PACKAGE]
const http = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json;version=3.0;compress=false',
    'Content-Type': 'application/json;charset=utf-8',
  },
  data: {},
})
// 请求之前拦截
http.interceptors.request.use(
  (config) => {
    console.log(config,'请求拦截')
    !loadingArr.length && NProgress.start()
    loadingArr.push('小美女')
    const token = getToken()
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  (error) => {
    NProgress.done()
    loadingArr.length = 0
    return Promise.reject(error)
  }
)
// 响应拦截
http.interceptors.response.use(
  (config) => {
    loadingArr.shift()
    !loadingArr.length && NProgress.done()
    const { code:responseCode, message:responseMsg,result:data } = config.data
    // const code = ['operator31', 'token_error02', 'token_error01', 'token_error00', 'istorage03', '500']
    if (responseCode == '200') {
      return Promise.resolve(config.data.result)
    } else if (responseCode === 'token_error01' || responseCode === 'token_error02' || responseCode === 'token_error00') {
      message.error(responseMsg)
      // clearToken()
      // window.location.href = '/#/login?back=true'
      // window.location.reload()
      return null
    } else {
      message.error(responseMsg)
      clearToken()
      window.history.replaceState(null, '', '/#/login')
      window.location.reload()
      return null
    }
    const params = {
      responseCode,
      responseMsg,
      data: data || null,
    }
    return Promise.reject(params)
  },
  (err) => {
    NProgress.done()
    loadingArr.length = 0
    const params = {
      responseCode: err.response.data.responseCode ,
      responseMsg: err.response.data.responseMsg ,
      data: null,
    }
    return Promise.reject(params)
  }
)

export default http
