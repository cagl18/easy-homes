const mongoose = require('mongoose');
const validator = require('validator');

const agentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please tell us your name!'],
      text: true,
    },
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

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
