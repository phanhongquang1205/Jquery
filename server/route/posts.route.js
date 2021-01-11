const express = require('express')
const router = express.Router()
const postsController = require('../controller/posts.controller')


router.get('/', postsController.getPosts)
router.post('/:id([0-6]{6})', postsController.postPost)
router.get('/:id([1-5]{1})', postsController.indexPost)
router.post('/update/:id([1-5]{1})/:data', postsController.updatePost)
router.delete('/delete/:id([1-5]{1})', postsController.deletePost)


module.exports = router