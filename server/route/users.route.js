var express = require('express')
var router = express.Router()

const usersController = require('../controller/user.controller')

router.get('/', usersController.getUsers) 

router.get('/:id([0-6]{6})', usersController.getUsersById)

module.exports = router