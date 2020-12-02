//here is where you can configure db, error handling, environment variables
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Agent = require('../models/agentModel');
const Listing = require('../models/listingModel');

dotenv.config({ path: '../config.env' }); //setting variables from file to node.js process (App enviroment)
// console.log(app.get('env')); // this variable is set by express
// console.log(process.env); // this variables are set by node.js

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
  })
  .then(() => {
    console.log('DB connection successfully');
  }); //connecting to database

//READ JSON FILE
const agents = JSON.parse(fs.readFileSync(`${__dirname}/agents.json`, 'utf-8'));
const listings = JSON.parse(
  fs.readFileSync(`${__dirname}/listings.json`, 'utf-8')
);

//IMPORT DATA INTO db
const importData = async () => {
  try {
    await Agent.create(agents);
    await Listing.create(listings);
    console.log('data successfully imported');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Agent.deleteMany();
    await Listing.deleteMany();
    console.log('data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
