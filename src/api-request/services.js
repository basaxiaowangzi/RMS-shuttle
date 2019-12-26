// import NProgress from 'nprogress'
import http from '../utils/http'
import { message } from 'antd'

const services = async (payload) => {
  // NProgress.start()
  // console.log(payload)
  try {
    const res = await http.request({ ...payload })
    return res
  } catch (error) {
    error.msg && message.warning(error.msg)
    throw error
  } finally {
    setTimeout(() => {
      // NProgress.done()
    }, 500)
  }
}
// 通用的api接口函数
export const apiReq = async (url, payload, method = 'get') => {
  const obj = method.toLowerCase() === 'post' ? {
    url,
    method: 'POST',
    data: { ...payload }
  } : {
    url,
    method: 'GET',
    params: { ...payload }
  }
  const res = await services(obj)
  return res
}
export default services
