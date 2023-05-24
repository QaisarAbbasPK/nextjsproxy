const httpProxyMiddleware = require('http-proxy-middleware');

const proxy = new httpProxyMiddleware({
  target: 'https://jsonplaceholder.typicode.com',
  pathRewrite: {
    '/': ''
  }
});

module.exports = proxy;
