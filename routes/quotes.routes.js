const router = require('express').Router();
const {QuotesController} = require('../controllers')

router.get("/quotes", QuotesController.index);




module.exports = router;