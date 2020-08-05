const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    //restful API do not send any data to the client in a delete operation, hence the 204 status.
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({ status: 'success', data: null });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({ status: 'success', data: { data: doc } });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({ status: 'success', data: { data: doc } }); //need to send data to finish the request response cycle. 201 code stand for created
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    const query = Model.findById(req.params.id); //helper method equivalent to Tour.findOne({_id:req.params.id})
    if (popOptions) query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({ status: 'success', data: { doc } });
  });

exports.getAll = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on Tour
    let filter = {};
    if (req.params.listingId) filter = { listing: req.params.listingId };

    //BUILD QUERY
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    if (popOptions) features.query.populate(popOptions);

    //EXECUTE QUERY
    // const docs = await features.query.explain();
    const docs = await features.query;

    //SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: { docs },
    });
  });
