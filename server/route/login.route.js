const express = require('express')
const router = express.Router()
const loginController = require('../controller/login.controller')

router.get('/', loginController.loginForm)
router.post('/', loginController.loginData)



module.exports = router
