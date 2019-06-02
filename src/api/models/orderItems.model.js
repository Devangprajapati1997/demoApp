const mongoose = require('mongoose');
const { mongo } = require('../../config/vars');
const mongooseConfig = require('../../config/mongoose');
mongooseConfig.connect(mongo.db_2_uri);

/**
 * Order Items Schema
 * @private
 */
const orderItemSchema = new mongoose.Schema({
  orderId: {
    type: Schema.type.ObjectId,
    required: true,
  },
  productId: {
    type: Schema.type.ObjectId,
    required: true,
  },
  usertId: {
    type: Schema.type.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
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
orderItemSchema.method({
});

/**
 * Statics
 */
orderItemSchema.statics = {
};

/**
 * @typedef OrderItem
 */
module.exports = mongoose.model('OrderItem', orderItemSchema);
