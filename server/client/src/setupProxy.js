const proxy = require('http-proxy-middleware');

//const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
//   app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
// };

module.exports = function (app) {
  let target;
  if (process.env.NODE_ENV === 'development') {
    target = `http://localhost:8000`;
  } else {
    target = `${process.env.PUBLIC_URL}:${process.env.PORT}`;
  }

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
