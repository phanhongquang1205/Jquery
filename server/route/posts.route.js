const express = require('express')
const router = express.Router()
const postsController = require('../controller/posts.controller')
const jqueryController = require('../controller/jquery.controller')

router.get('/', jqueryController.viewPost)
router.get('/', postsController.getPosts)
router.post('/:id([1-9]{1})/:data', postsController.postPost)
router.get('/:id([1-9]{1})', postsController.indexPost)
router.put('/:id([1-9]{1})/:data', postsController.updatePost)
router.delete('/:id([1-9]{1})', postsController.deletePost)
module.exports = router