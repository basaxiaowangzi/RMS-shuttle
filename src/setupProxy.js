const proxy = require('http-proxy-middleware');
// const service = (context) => {
//   const service = {
//     test: 'http://test-yuhua.com',
//     dev: 'http://dev-yuhua.com',
//   }
//   return Object.hasOwnProperty.call(service, context) ? service[context] : service['test']
// }

module.exports = function(app) {
  // JSON.parse(process.env.npm_config_argv)
  // app.use(
  //   '/test',
  //   proxy({
  //     target: 'http://test-yuhua.com',
  //     "pathRewrite": {
  //       "^/test" : ""
  //     },
  //     changeOrigin: true,
  //   })
  // );
  app.use(
    '/auth',
    proxy({
      target: 'http://120.26.90.128:8768/v1/auth',
      "pathRewrite": {
        "^/auth" : ""
      },
      changeOrigin: true,
    })
  );
    app.use(
    '/reserve',
    proxy({
      target: 'http://120.26.90.128:8768/v1/reserve/reserve',
      "pathRewrite": {
        "^/reserve" : ""
      },
      changeOrigin: true,
    })
  );
};