const Router = require('express');
const timestampController = require('./controllers/TimestampController');

const router = new Router();

// health endpoint 
router.get("/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

router.get('/:date?', timestampController.timeStamp);

module.exports = router;
