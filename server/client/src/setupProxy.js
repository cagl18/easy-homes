const proxy = require('http-proxy-middleware');

//const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
//   app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
// };

module.exports = function (app) {
  // if (process.env.NODE_ENV === 'development') {
  const target = process.env.PUBLIC_URL
    ? `${process.env.PUBLIC_URL}:${process.env.PORT}`
    : 'http://localhost:8000';
  app.use(
    // proxy(['/api/v1', '/auth/google'], { target: 'http://localhost:8000' })
    proxy(['/api/v1', '/auth/google'], {
      target: target,
    })
  );
  // }
};

// module.exports = function (app) {
//   app.use(
//     proxy(['/api/v1', '/auth/google'], { target: 'http://localhost:8000' })
//   );
// };
