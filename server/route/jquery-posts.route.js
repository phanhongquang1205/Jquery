const express = require('express')
const router = express.Router()
const jqueryController = require('../controller/jquery-posts.controller')

router.get('/', jqueryController.readFile)
router.post('/', jqueryController)


module.exports = router