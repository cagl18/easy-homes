const mongoose = require('mongoose');

const favoriteSchema = new mongooseSchema({
  listing: {
    type: mongoose.Schema.ObjectId,
    ref: 'Listing',
    required: [true, 'Favorite Listing must belong to a Listing!'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'Agent',
    required: [true, 'Favorite Listing must belong to an Agent'],
  },
  createdAt: { type: Date, default: Date.now() },
  liked: { type: Boolean, default: false },
  disliked: { type: Boolean, default: false },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
