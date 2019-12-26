const token = 'EJU_evaluation_TOKEN'
const data = 'EJU_evaluation_USERDATA'
const weChatSDK_TOKEN = 'CAIC_WECHATSDK_TOKEN'

export const setToken = (e) => localStorage.setItem(token, e)
export const setUserInfo = (e) => localStorage.setItem(data, e)
export const getToken = () => localStorage.getItem(token)
export const clearToken = () => {
  localStorage.removeItem(token)
  localStorage.removeItem(data)
}

export const getUserInfo = () => {
  return localStorage[data] ? JSON.parse(localStorage[data]) : {}
}

export const toLogin = (e) => {
  window.location.href = '/#/login'
}

export const clearWeChatSDKToken = () => {
  localStorage.removeItem(weChatSDK_TOKEN)
}

export const getWeChatToken = () => {
  const d = localStorage.getItem(weChatSDK_TOKEN)
  return d ? JSON.parse(d) : {}
}

export const setWeChatToken = (e) => localStorage.setItem(weChatSDK_TOKEN, e)
 

