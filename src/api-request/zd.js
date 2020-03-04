import { apiReq } from './services'
const argv = process.env.PROXY || {}
let proxyKey = argv.original[1] || 'dev'

if(process.env.NODE_ENV !== 'development') {
  proxyKey = ''
}
console.log(proxyKey,'proxyKey')
class Xhr {

  loginforEmailUrl = `${proxyKey}/member/login`
  registerInfoUrl = `${proxyKey}/member/regMember`
  permissionUrl = `${proxyKey}/permission/getPermission`
  getProGrdListUrl = `${proxyKey}/reserve/getReserveList` //获取场地器材列表
  addEquipmentInfo = `${proxyKey}/reserve/add`
  getReservertimerList = `${proxyKey}/reserve/getReserveTime`
  // 登录
  loginforEmail = (data = {}) =>
  apiReq(this.loginforEmailUrl, data,'post');

  // 注册
  registerInfo = (data = {}) =>
  apiReq(this.registerInfoUrl, data, 'post');

  // 获取场地器材列表
  getProGrdList = (data = {}) =>
  apiReq(this.getProGrdListUrl, data, 'get');

  // 新增器材
  addEquipment = (data = {}) =>
  apiReq(this.addEquipmentInfo, data, 'post');

  // 根据id获取器材或者场地可预约时间
  getReserverTime = (data = {}) => 
  apiReq(this.getReservertimerList, data, 'post');


 // 权限设置
  setPermission = (data = {}) =>
  apiReq(this.permissionUrl, data);
}

export default new Xhr()
