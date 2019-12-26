const ip = require('ip')
const o = Object.hasOwnProperty
const host = ip.address()
module.exports = {
  appName: 'CAIC OSS',
  host,
  port: '3080',
  service: (context) => {
    const service = {
      test: 'http://10.122.137.10:4080',
      dev: 'http://10.122.137.5:4080',
      // dev: 'http://rest.apizza.net/mock/435765ac559d581c13f157c7cbdebaa0/',
      // dev: 'http://rest.apizza.net/mock/fe331c5764b00d8017916bf5c96f28d2',
      // dev: 'http://172.28.132.220:8076',
      // dev: 'http://test-appmkt.qiushibc.com',
      // test1: 'http://test-tgy.caicchina.com'
    }
    return o.call(service, context) ? service[context] : service['test']
  },
}
