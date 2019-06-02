const mongoose = require('mongoose');
const { mongo } = require('../../config/vars');
const mongooseConfig = require('../../config/mongoose');
mongooseConfig.connect(mongo.db_2_uri);

/**
 * Address Schema
 * @private
 */
const addressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true
  },
  usertId: {
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
addressSchema.method({
});

/**
 * Statics
 */
addressSchema.statics = {
};

/**
 * @typedef Category
 */
module.exports = mongoose.model('Address', addressSchema);
