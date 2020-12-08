const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const Listing = require('../models/listingModel');

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

exports.addListingLike = catchAsync(async (req, res, next) => {
  if (!req.user) {
    return next(new AppError('You must be login to access this route', 400));
  }

  const listingId = req.params.id;
  await req.user.favorite(listingId); // adding listing to user favorite list;
  // const listing = await Listing.findById(req.params.id); // need to check why this is not working
  // if (listing) {
  //   await listing.updateFavoriteCount();
  // }
  // console.log('updated user', req.user);
  res.status(200).json({ status: 'success', data: { favorite: true } });
});
exports.removeListingLike = catchAsync(async (req, res, next) => {
  if (!req.user) {
    return next(new AppError('You must be login to access this route', 400));
  }
  const listingId = req.params.id;
  await req.user.unfavorite(listingId);
  // const listing = await Listing.findById(listingId);
  // if (listing) {
  //   await listing.updateFavoriteCount();
  // }
  // console.log('updated user', req.user);
  res.status(200).json({ status: 'success', data: { favorite: false } });
});

exports.isListingLiked = catchAsync(async (req, res, next) => {
  if (!req.user) {
    return next(new AppError('You must be login to access this route', 400));
  }
  const listingId = req.params.id;
  const isFavorite = await req.user.isFavorite(listingId);
  // console.log('updated user', req.user);
  res.status(200).json({ status: 'success', data: { favorite: isFavorite } });
});

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
