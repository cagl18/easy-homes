const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router(); //creating a new router

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect); //protect(require login) all routes after this middleware(below this line).

router.patch('/updateMyPassword', authController.updatePassword); //using patch since we are updating the user document/row
// router.get('/me', userController.getMe, userController.getUser);
// router.patch(
//   '/updateMe',
//   userController.uploadUserPhoto,
//   userController.resizeUserPhoto,
//   userController.updateMe
// );
// router.delete('/deleteMe', userController.deleteMe);

// router.use(authController.restrictTo('admin')); // Only admin can access the below routes

router.route('/').get(userController.getAllUsers);
// .post(userController.createUser);
// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
