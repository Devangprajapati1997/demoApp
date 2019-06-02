const mongoose = require('mongoose');
const { mongo } = require('../../config/vars');
const mongooseConfig = require('../../config/mongoose');
mongooseConfig.connect(mongo.db_2_uri);

/**
 * Product Schema
 * @private
 */
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  merchantId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
  }
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
productSchema.method({
});

/**
 * Statics
 */
productSchema.statics = {
};

/**
 * @typedef Product
 */
module.exports = mongoose.model('Product', productSchema);
