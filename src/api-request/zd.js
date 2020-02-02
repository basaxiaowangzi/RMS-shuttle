import { apiReq } from './services'
const argv = process.env.PROXY || {}
let proxyKey = argv.original[1] || 'dev'

if(process.env.NODE_ENV !== 'development') {
  proxyKey = ''
}
class Xhr {

  // loginforEmailUrl = `${proxyKey}/api/customer/setPwd`
  // registerInfoUrl = `${proxyKey}/api/customer/register`
  permissionUrl = `${proxyKey}/permission/getPermission`

  // 邮箱登录
  loginforEmail = (data = {}) =>
  apiReq(this.loginforEmailUrl, data,'post');
  
  registerInfo = (data = {}) =>
  apiReq(this.registerInfoUrl, data, 'post')

 // 权限设置
  setPermission = (data = {}) =>
  apiReq(this.permissionUrl, data);
}

export default new Xhr()
