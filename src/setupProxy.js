const proxy = require('http-proxy-middleware');
// const service = (context) => {
//   const service = {
//     test: 'http://test-tgy.caicchina.com',
//     dev: 'http://dev-tgy.caicchina.com',
//   }
//   return Object.hasOwnProperty.call(service, context) ? service[context] : service['test']
// }

module.exports = function(app) {
  // JSON.parse(process.env.npm_config_argv)
  app.use(
    '/test',
    proxy({
      target: 'http://10.122.137.10:4080',
      "pathRewrite": {
        "^/test" : ""
      },
      changeOrigin: true,
    })
  );
  app.use(
    '/dev',
    proxy({
      target: 'http://10.122.137.5:4080',
      "pathRewrite": {
        "^/dev" : ""
      },
      changeOrigin: true,
    })
  );
  app.use('/weixinApi',
    proxy({
      target: 'https://api.weixin.qq.com/',
      pathRewrite: {
        "^/weixinApi": ""
      },
      changeOrigin: true
    })
  )
};