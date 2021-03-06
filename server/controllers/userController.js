const User = require('../models/userModel');
// const sharp = require('sharp');
// const multer = require('multer');
const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError.js');
const factory = require('./handlerFactory.js');

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/img/users');
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`); //user-9495982ca-234344.jpg
//   },
// });

// const multerStorage = multer.memoryStorage();

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image')) {
//     cb(null, true);
//   } else {
//     cb(new AppError('Not an image! Please upload only images', 400), false);
//   }
// };
// const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

// exports.uploadUserPhoto = upload.single('photo');

// exports.resizeUserPhoto = (req, res, next) => {
//   if (!req.file) return next();

//   req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

//   sharp(req.file.buffer)
//     .resize(500, 500)
//     .toFormat('jpeg')
//     .jpeg({ quality: 90 })
//     .toFile(`public/img/users/${req.file.filename}`);

//   next();
// };

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
  // const filterdObj = {};
  // for (let el in obj) {
  //   if (obj.includes(el)) {
  //     filterdObj[el] = obj[el];
  //   }
  // }
  // return filterdObj;
};

// //ROUTE HANDLERS
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  //1) create an error if user POSTS the password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use / updatePassword',
        400
      )
    );
  }

  //2) Filtered out unwanted fields name that are not allow to be updated
  const filteredBody = filterObj(
    req.body,
    'name',
    'firstname',
    'lastname',
    'email'
  );
  if (req.file) filteredBody.photo = req.file.filename;

  //3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ status: 'success', user: updatedUser });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });

  res.status(204).json({ status: 'success', data: null });
});

// exports.getAllFavorties = factory.getOne(User, {
//   path: 'favorties',
//   select: '-__v',
// });

exports.getAllFavorties = catchAsync(async (req, res, next) => {
  const docs = await req.user.getFavorites();
  res
    .status(200)
    .json({ status: 'success', results: docs.length, data: { docs } });
  // console.log('test', test);
  // const user = await User.findById(req.user._id).populate('favorites');
  // const { favorites } = user;
});

// exports.getAllFavorties = catchAsync(async (req, res, next) => {
//   const docs = await req.user.getFavorites();
//   res.status(200).json({ status: 'success', data: { docs } });
//   // console.log('test', test);
//   // const user = await User.findById(req.user._id).populate('favorites');
//   // const { favorites } = user;
// });

// exports.createUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not defined! Please use /signup instead ',
//   });
// };

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);
exports.updateUser = factory.updateOne(User); //Do Not update password with this route
exports.deleteUser = factory.deleteOne(User);
