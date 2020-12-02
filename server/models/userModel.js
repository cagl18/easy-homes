const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Listings' }],
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
  if (this.favorites.indexOf(id) === -1) {
    this.favorites.push(id);
  }
  return this.save();
};

userSchema.methods.unfavorite = function (id) {
  this.favorites.remove(id);
  return this.save();
};
userSchema.methods.isFavorite = function (id) {
  return this.favorites.some(function (favoriteId) {
    return id.toString() === favoriteId.toString();
  });
};

const User = mongoose.model('User', userSchema);
module.exports = User;
