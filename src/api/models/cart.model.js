const mongoose = require('mongoose');
const { mongo } = require('../../config/vars');
const mongooseConfig = require('../../config/mongoose');
mongooseConfig.connect(mongo.db_2_uri);

/**
 * Cart Schema
 * @private
 */
const cartSchema = new mongoose.Schema({
  orderItemsId: {
    type: Schema.type.ObjectId,
    required: true,
  },
  userId: {
    type: Schema.type.ObjectId,
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
cartSchema.method({
});

/**
 * Statics
 */
cartSchema.statics = {
};

/**
 * @typedef Category
 */
module.exports = mongoose.model('Cart', cartSchema);
