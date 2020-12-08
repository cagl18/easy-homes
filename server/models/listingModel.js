const mongoose = require('mongoose');
// const textSearch = require('mongoose-partial-full-search');
const slug = require('slug');
const { Schema } = mongoose;

const User = require('./userModel');

const listingSchema = mongoose.Schema(
  {
    agents: [{ type: Schema.Types.ObjectId, ref: 'Agent' }],
    img: String,
    slug: String,
    type: { type: String, enum: ['for-sale', 'for-rent'], default: 'for-rent' },
    keyDetails: {
      status: String,
      rooms: Number,
      year_built: Number,
      dom: Number,
      property_type: String,
      msl_type: String,
      taxes: String,
      common: String,
      min_down_p: String,
      county: String,
    },
    description: [String],
    amenities: [String], //need its own table
    comingsoon: String,
    price: Number,
    address: { type: String, text: true },
    neighborhood: { type: String, text: true },
    city: String,
    state: String,
    zipcode: Number,
    beds: Number,
    baths: Number,
    sqft: Number,
    location: {
      latitude: Number,
      longitude: Number,
    },
    favoritesCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now() },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Duplicate the ID field.

listingSchema.methods.slugify = function () {
  this.slug = slug(
    `${this.address}-${this.neighborhood}-${this.city}- ${this.zipcode}`,
    { lower: true }
  );
};

listingSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slugify();
  }
  return next();
});

listingSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

listingSchema.methods.updateFavoriteCount = async function () {
  const listing = this;
  const count = await User.countDocuments({
    favorites: { $in: [listing._id] },
  });
  listing.favoritesCount = count;
  return listing.save();
};

// give our schema text search capabilities
// listingSchema.plugin(textSearch);

// listingSchema.index({ address: 'text' });

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
