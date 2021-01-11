const express = require('express')
const router = express.Router()
const postsController = require('../controller/posts.controller')


router.get('/', postsController.getPosts)
<<<<<<< Updated upstream
router.post('/:id([0-6]{6})', postsController.postPost)
router.get('/:id([1-5]{1})', postsController.indexPost)
router.post('/update/:id([1-5]{1})/:data', postsController.updatePost)
router.delete('/delete/:id([1-5]{1})', postsController.deletePost)
=======
router.post('/:id([1-9]{1})/:data', postsController.postPost)
router.get('/:id([1-9]{1})', postsController.indexPost)
router.put('/:id([1-9]{1})/:data', postsController.updatePost)
router.delete('/:id([1-9]{1})', postsController.deletePost)
>>>>>>> Stashed changes
module.exports = router