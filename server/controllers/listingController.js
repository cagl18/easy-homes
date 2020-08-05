const Listing = require('../models/listingModel');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

//ROUTE HANDLERS
exports.getAllListings = factory.getAll(Listing, {
  path: 'agents',
  fields: 'name photo',
});
exports.getListing = factory.getOne(Listing, {
  path: 'agents',
  select: '-__v -biography',
});
exports.createListing = factory.createOne(Listing);
exports.updateListing = factory.updateOne(Listing);
exports.deleteListing = factory.deleteOne(Listing);

// exports.getAllListings = catchAsync(async (req, res) => {
//   const listings = await Listing.find({});
//   res
//     .status(200)
//     .json({ status: 'success', results: listings.length, data: { listings } });
// });

// exports.getListing = catchAsync(async (req, res) => {
//   const listingId = req.params.id;
//   const listing = await Listing.findById(listingId);
//   res.status(200).json({ status: 'success', data: listing });
// });
