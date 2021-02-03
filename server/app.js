//This file is used to configure everything related to the EXPRESS APP
//building an API using express

const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const agentRouter = require('./routes/agentRoutes');
const userRouter = require('./routes/userRoutes');
const listingRouter = require('./routes/listingRoutes');
const searchRouter = require('./routes/searchRoutes');

const app = express();

// 1) GLOBAL MIDDLEWARES

//Set security HTTP headers
app.use(helmet()); // this should be at the top of middleware stack

// Development console logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Limit requests from same API Client IP address, to prevent brute force and denial attacks
const limiter = rateLimit({
  max: 300,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});

app.use('/api', limiter); //applying request limiter to api route

//Body parser, middleware. reading data from client (POST/PATCH) request into request body (req.body)
app.use(express.json({ limit: '10kb' })); //limiting body request size to 10 Kilobytes, to prevent malicious attack

// Data sanitization against No-SQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS (prevent HTML /JS code injection)
app.use(xss());

// Middleware for reading cookies from requests
app.use(cookieParser());

//Prevent parameter pollution: should be used towards the end since it clean the queryString
// app.use(
//   hpp({
//     whitelist: [
//       'duration',
//       'ratingsAverage',
//       'ratingsQuantity',
//       'maxGroupSize',
//       'difficulty',
//       'price',
//     ],
//   })
// );

//ROUTES
app.use('/api/v1/agents', agentRouter); //mounting a new router on a route. using the agentRouter as middleware
app.use('/api/v1/users', userRouter);
app.use('/api/v1/listings', listingRouter);
app.use('/api/v1/search', searchRouter);

//Compress all HTTP responses, including static files before sending them over the network to the client/browser
app.use(compression());

// handles static files and routes defined by the client (react router)
if (process.env.NODE_ENV === 'production') {
  // Express will serve up productions assets, like our main.js file or main.css file!
  app.use(express.static('client/build')); //check if an unknown route is a file

  // Express serve up the index.html file, if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); //any other unknown routes, just send it index.html for react router to handle
  });
}

// //Serving Static files
// app.use(express.static(`${__dirname}/public`));

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404)); //if an argument is passed to the next function, express assume there was an error and will call the global middleware hanlder
}); //return a 404 for all URL request that did not match any of the above routes

app.use(globalErrorHandler); //Express recognize a global middleware hanlder, if the callback passed to use middleware has 4 arguments

module.exports = app;
