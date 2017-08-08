var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promotionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: '',
    required: false
  },
  price: {
    type: Currency,
    required: true
  },
  description: {
    type: String,
    required: true
  }
  timestamps: true  
});

var promotion = mongoose.model('promotion', promotionSchema);

module.exports = promotion;
