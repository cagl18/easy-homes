const proxy = require('http-proxy-middleware');

//const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
//   app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
// };

module.exports = function (app) {
  if (process.env.NODE_ENV === 'development') {
    const target = process.env.PUBLIC_URL
      ? `${process.env.PUBLIC_URL}:${process.env.PORT}`
      : 'http://localhost:8000';
    app.use(
      // proxy(['/api/v1', '/auth/google'], { target: 'http://localhost:8000' })
      proxy(['/api/v1', '/auth/google'], {
        target: target,
      })
    );
  }
};

// if (process.env.NODE_ENV === 'production') {
//   // Express will serve up productions assets, like our main.js file or main.css file!
//   app.use(express.static('client/build')); //check if an unknown route is a file

//   //Set a proxy redirect API traffic in production
//   httpProxy.createProxyServer({
//     target: process.env.PUBLIC_URL,
//     toProxy: true,
//     changeOrigin: true,
//     xfwd: true,
//   });

//previos file content

// module.exports = function (app) {
//   app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
//   app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
// };

module.exports = function (app) {
  app.use(
    proxy(['/api/v1', '/auth/google'], { target: 'http://localhost:8000' })
  );
};
