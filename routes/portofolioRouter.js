const router = require('express').Router()
const portofolioController = require('../controllers/portofolioController')

router.get('/', portofolioController.index)
router.post('/create', portofolioController.create)
router.patch('/update/:id', portofolioController.update)
router.get('/:id', portofolioController.detail)
router.delete('/:id', portofolioController.delete)

module.exports = router