const express = require('express');
const FavoriteController = require('../controllers/favoriteController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.protect); //need to be login to view all before routes

router
  .route('/')
  .get(FavoriteController.getAllFavorite)
  .post(favoriteController.createFavorite);

module.exports = router;
