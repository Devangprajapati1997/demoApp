const mongoose = require('mongoose');
const { mongo } = require('../../config/vars');
const mongooseConfig = require('../../config/mongoose');
mongooseConfig.connect(mongo.db_2_uri);

/**
 * Order Schema
 * @private
 */
const orderSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  order: {
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
orderSchema.method({
});

/**
 * Statics
 */
orderSchema.statics = {
};

/**
 * @typedef Order
 */
module.exports = mongoose.model('Order', orderSchema);
