import { apiReq } from './services'
const argv = process.env.PROXY || {}
let proxyKey = argv.original[1] || 'dev'

if(process.env.NODE_ENV !== 'development') {
  proxyKey = ''
}
class Xhr {

  loginforEmailUrl = `${proxyKey}/api/customer/setPwd`
  registerInfoUrl = `${proxyKey}/api/customer/register`

  // 邮箱登录
  loginforEmail = (data = {}) =>
  apiReq(this.loginforEmailUrl, data,'post');
  
  registerInfo = (data = {}) =>
  apiReq(this.registerInfoUrl, data, 'post')

 
}

export default new Xhr()
