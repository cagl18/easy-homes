const mongoose = require('mongoose');
const validator = require('validator');
const slug = require('slug');

const agentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please tell us your name!'],
      text: true,
    },
    slug: String,
    title: String,
    biography: [String],
    photo: String,
    company: String,
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email address'],
    },
    phone: String,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    dateUpdated: Date,
    timestamp: Date,
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Duplicate the ID field.
agentSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

agentSchema.methods.slugify = function () {
  this.slug = slug(this.name.replace(' ', '-'), { lower: true });
};

agentSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slugify();
  }
  return next();
});

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
