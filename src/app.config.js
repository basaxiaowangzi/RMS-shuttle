const ip = require('ip')
const o = Object.hasOwnProperty
const host = ip.address()
module.exports = {
  appName: '雨花后台管理系统',
  host,
  port: '3080',
  service: (context) => {
    const service = {
      dev: 'http://dev-yuhua.com',
      test1: 'http://test-yuhua.com'
    }
    return o.call(service, context) ? service[context] : service['test']
  },
}
