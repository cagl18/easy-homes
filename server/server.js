//here is where you can configure db, error handling, environment variables
const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting Down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' }); //setting variables from file to node.js process (App enviroment)
const app = require('./app');

//CONNECTING TO MONGODB
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose
  // .connect(process.env.DATABASE_LOCAL, {   //connecting to the local database
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successfully');
  }); //connecting to database

//START THE SERVER
const port = process.env.PORT || 4000; //using environment variables
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLE REJECTED! Shutting Down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  }); //allow server time to finished all pending request before shutting down
}); //listening for unhandledRejection so that the callback function can handle the error.
//Handling error that happened outside Express, For example, this will catch errors with connecting to the database
