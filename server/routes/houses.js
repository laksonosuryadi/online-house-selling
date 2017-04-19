var express = require('express');
var router = express.Router();
var House = require('../controllers/houseController')

router.get('/', House.getHouses);
router.post('/', House.addHouse);
router.delete('/:houseId', House.deleteHouse);
router.put('/:houseId', House.updateHouse);
router.get('/:houseId', House.findOneHouse)

module.exports = router;
