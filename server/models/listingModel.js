const mongoose = require('mongoose');
// const textSearch = require('mongoose-partial-full-search');
const { Schema } = mongoose;

const listingSchema = mongoose.Schema(
  {
    agents: [{ type: Schema.Types.ObjectId, ref: 'Agent' }],
    img: String,
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
    createdAt: { type: Date, default: Date.now() },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Duplicate the ID field.
listingSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// give our schema text search capabilities
// listingSchema.plugin(textSearch);

// listingSchema.index({ address: 'text' });

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
