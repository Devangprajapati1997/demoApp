const mongoose = require('mongoose');
const { mongo } = require('../../config/vars');
const mongooseConfig = require('../../config/mongoose');
mongooseConfig.connect(mongo.db_2_uri);

/**
 * Merchant Schema
 * @private
 */
const merchantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */


/**
 * Methods
 */
merchantSchema.method({
});

/**
 * Statics
 */
merchantSchema.statics = {
};

/**
 * @typedef Merchant
 */
module.exports = mongoose.model('Merchant', merchantSchema);
