const express = require('express');
const listingController = require('../controllers/listingController');

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

module.exports = router;
