const express = require('express');
const listingController = require('../controllers/listingController');

const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(listingController.getAllListings)
  .post(listingController.createListing);
router
  .route('/:id')
  .get(listingController.getListing)
  .post(listingController.updateListing)
  .delete(listingController.deleteListing);

router.use(authController.protect); //protect(require login) all routes after this middleware(below this line).

router
  .route('/:id/favorite')
  .get(listingController.isListingLiked)
  .patch(listingController.addListingLike)
  .delete(listingController.removeListingLike);

module.exports = router;
