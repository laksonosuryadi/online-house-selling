var House = require('../models/house');

var addHouse = function(req, res, next) {
  //let location = req.body.location.split(',')
  House.create({
    owner: req.body.owner,
    address: req.body.address,
    description: req.body.description,
    price: req.body.price,
    photo: req.body.photo,
    contact: req.body.contact,
    location: {
      lat: req.body.lat,
      lng: req.body.lng
    }
  }, function(err, house) {
    if(err){
      res.send(err)
    } else {
      res.send(house)
    }
  });
}

var getHouses = function(req, res, next) {
  House.find(function(err, house) {
    if(err) {
      res.send(err)
    } else {
      res.send(house)
    }
  });
}

var deleteHouse = function(req, res) {
  House.findByIdAndRemove(req.params.houseId, function (err, house) {
    if(err){
      res.send(err)
    } else {
      res.send("delete sukses")
    }
  });
}

var updateHouse = function(req, res) {
  //let location = req.body.location.split(',')
  House.findOneAndUpdate(
    {
      "_id" : req.params.houseId
    },
    {
      owner: req.body.owner,
      address: req.body.address,
      description: req.body.description,
      price: req.body.price,
      photo: req.body.photo,
      contact: req.body.contact,
      location: {
        lat: req.body.lat,
        lng: req.body.lng
      }
    }, function(err, house) {
      if(err){
        res.send(err)
      } else {
        res.send("update sukses")
      }
    })
}

var findOneHouse = function(req, res) {
  House.findOne({ _id: req.params.houseId}, function (err, foods){
    if(err) {
      res.send(err)
    } else {
      res.send(foods)
    }
  });
}

module.exports = {
  addHouse,
  getHouses,
  deleteHouse,
  updateHouse,
  findOneHouse
}
