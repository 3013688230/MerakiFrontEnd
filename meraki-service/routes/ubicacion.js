var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "tarjetas": [
      { imageName: 'auto', cols: 2, rows: 1 },
      { imageName: 'auto2', cols: 2, rows: 1 },
      { imageName: 'auto3', cols: 2, rows: 1 },
      { imageName: 'auto4', cols: 2, rows: 1 }
    ],
    "TarjetasWeb":  [
      { imageName: 'auto', cols: 2, rows: 1 },
      { imageName: 'auto2', cols: 1, rows: 1 },
      { imageName: 'auto3', cols: 1, rows: 2 },
      { imageName: 'auto4', cols: 1, rows: 1 }
    ]
  };
  res.json(jsonResponse);
});

module.exports = router;
