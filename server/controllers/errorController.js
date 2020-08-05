const AppError = require('./../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  console.log(value);
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationsDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = (err) => {
  const message =
    err.name === 'TokenExpiredError'
      ? 'Expired token. Please log in again'
      : 'Invalid token. Please log in again';
  return new AppError(message, 401);
};

const sendErroDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  //Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    //programming or other unknown error: don't leak error details
    //1) Log error
    console.error('ERROR ', err);

    //2) Send generic
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong',
    });
  }
};

module.exports = (err, req, res, next) => {
  //   console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErroDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };

    //marking some mongodb errors as operational for the client to see
    if (error.name === 'CastError') {
      error = handleCastErrorDB(error);
    }
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError') error = handleValidationsDB(error);
    if (
      error.name === 'JsonWebTokenError' ||
      error.name === 'TokenExpiredError'
    )
      error = handleJWTError(error);

    //send error message to the client
    sendErrorProd(error, res);
  }
}; //Express recognize a global middleware hanlder, if the callback passed to use middleware has 4 arguments
