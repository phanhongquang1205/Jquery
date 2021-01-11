const express = require('express')
const router = express.Router()
const jqueryController = require('../controller/jquery.controller')

router.get('/', jqueryController.readFile)


module.exports = router