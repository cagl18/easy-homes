const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Listings = require('./listingModel');

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Please tell us your firstname!'],
    },
    lastname: {
      type: String,
      required: [true, 'Please tell us your lastname!'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email address'],
    },
    photo: String,
    role: {
      type: String,
      enum: ['user', 'agent', 'manager', 'admin'],
      default: 'user',
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minLength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please provide a password'],
      validate: {
        //this only works on CREATE and SAVE!
        validator: function (el) {
          return el === this.password;
        },
        message: 'Password do not match',
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    // favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Listing' }],
    favorites: {
      type: Map,
      of: Boolean,
      default: {},
    },
    // favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Listing' }],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.pre('save', async function (next) {
  //Only run this function if password was modified
  if (!this.isModified('password')) return next();

  //Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12); //bcrypt encryption
  this.passwordConfirm = undefined; //deleting the ConfirmPassword field from db
  next();
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre('/^find/', function (next) {
  this.find({ active: { $ne: false } }); //this points to the current Query
  next();
}); //this middleware, will be apply to all methods that start will 'find'

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimeStamp < changedTimeStamp; // 100 < 200
  }

  //False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

userSchema.virtual('name').get(function () {
  return this.firstname + ' ' + this.lastname;
});

userSchema.virtual('name').set(function (name) {
  let str = name.split(' ');

  this.firstname = str[0];
  this.lastname = str[1];
});

// Methods for dealing with favorites (liked) listings

userSchema.methods.favorite = function (id) {
  this.favorites.set(id, true);
  return this.save({ validateBeforeSave: false });
};

userSchema.methods.unfavorite = function (id) {
  if (this.favorites.has(id)) {
    this.favorites.set(id, false);
    return this.save({ validateBeforeSave: false });
  }
};

userSchema.methods.isFavorite = function (id) {
  if (this.favorites.has(id)) {
    return this.favorites.get(id) === true;
  }
  return false;
};

userSchema.methods.isUnfavorite = function (id) {
  if (this.favorites.has(id)) {
    return this.favorites.get(id) === false;
  }
  return false;
};

userSchema.methods.getFavorites = async function () {
  const favoritesIds = [];
  for (let [k, v] of this.favorites) {
    if (v === true) favoritesIds.push(k);
  }
  const listings = await Listings.find({ _id: { $in: favoritesIds } });

  return listings;
};
// userSchema.methods.getFavorites = async function () {
//   // const listing = await Listings.find({ _id: { $in: this.favorites } });
//   const user = await User.findOne({
//     _id: this._id,
//   })
//     .where('favorites')
//     .equals(true);
//   const favoritesIds = Object.keys(user.favorites);
//   console.log('user', user, 'favoritesIds', favoritesIds);
//   return user;
// };

const User = mongoose.model('User', userSchema);
module.exports = User;

// userSchema.methods.favorite = function (id) {
//   if (this.favorites.indexOf(id) === -1) {
//     this.favorites.push(id);
//     return this.save({ validateBeforeSave: false });
//   }
// };

// userSchema.methods.unfavorite = function (id) {
//   const index = this.favorites.indexOf(id);
//   if (index > -1) {
//     this.favorites.splice(index, 1);
//     return this.save({ validateBeforeSave: false });
//   }
// };
// userSchema.methods.isFavorite = function (id) {
//   return this.favorites.some(function (favoriteId) {
//     return id.toString() === favoriteId.toString();
//   });
// };

// userSchema.methods.getFavorites = async function () {
//   // const listing = await Listings.find({ _id: { $in: this.favorites } });
//   const user = await User.findById(this._id).populate('favorites');
//   return user.favorites;
// };
