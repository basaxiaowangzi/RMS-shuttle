import { apiReq } from './services'
const argv = process.env.PROXY || {}
let proxyKey = argv.original[1] || 'dev'

// if(process.env.NODE_ENV !== 'development') {
  proxyKey = ''
// }
console.log(proxyKey,'proxyKey')
class Xhr {

  loginforEmailUrl = `${proxyKey}/auth/member/login`
  registerInfoUrl = `${proxyKey}/auth/member/regMember`
  permissionUrl = `${proxyKey}/auth/permission/getPermission`
  getProGrdListUrl = `${proxyKey}/reserve/getReserveList` //获取场地器材列表
  addEquipmentInfo = `${proxyKey}/reserve/add`
  getReservertimerList = `${proxyKey}/reserve/getReserveTime`
  upOrDownUrl = `${proxyKey}/reserve/updateStatus`
  getBookInfoUrl = `${proxyKey}/reserve/getMemberReserve`
  startBookUrl =`${proxyKey}/reserve/startReserve`
  upDateBookInfoUrl = `${proxyKey}/reserve/updateReserveInfo`

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

  // 器材场地上下架
  upOrDown = (data= {}) => 
  apiReq(this.upOrDownUrl, data, 'post')

  // 获取会员预约信息
  getBookInfo = (data = {}) => 
  apiReq(this.getBookInfoUrl, data, 'post')

  //预约
  startBook = (data = {}) =>
  apiReq(this.startBookUrl, data, 'post')

  // 修改预约信息
  upDateBookInfo = (data ={}) =>
  apiReq(this.upDateBookInfoUrl, data, 'post')


 // 权限设置
  setPermission = (data = {}) =>
  apiReq(this.permissionUrl, data);
}

export default new Xhr()
