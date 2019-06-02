const mongoose = require('mongoose');
const { mongo } = require('../../config/vars');
const mongooseConfig = require('../../config/mongoose');
mongooseConfig.connect(mongo.db_2_uri);

/**
 * Category Schema
 * @private
 */
const categorySchema = new mongoose.Schema({
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
categorySchema.method({
});

/**
 * Statics
 */
categorySchema.statics = {
};

/**
 * @typedef Category
 */
module.exports = mongoose.model('Category', categorySchema);
