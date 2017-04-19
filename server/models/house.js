var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var houseSchema = new Schema({
  owner: {type: String, required:[true, 'owner is required']},
  address: {type: String, required:[true, 'address is required']},
  description: {type: String, required:[true, 'description is required']},
  price: {type: String, required:[true, 'price is required']},
  photo: {type: String, required:[true, 'photo is required']},
  contact: {type: String, required:[true, 'contact is required']},
  location: {
    lat: {type: Number, required:[true, 'lat is required']},
    lng: {type: Number, required:[true, 'lng is required']}
  }
});

var House = mongoose.model('House', houseSchema);

module.exports = House;
