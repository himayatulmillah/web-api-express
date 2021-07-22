const router = require('express').Router()
const articleController = require('../controllers/articleController')

router.get('/', articleController.index)
router.post('/create', articleController.create)
router.patch('/update/:id', articleController.update)
router.get('/:id', articleController.detail)
router.delete('/:id', articleController.delete)

module.exports = router