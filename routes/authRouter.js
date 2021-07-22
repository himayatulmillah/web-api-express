const router = require('express').Router()
const authController = require('../controllers/authController')

router.post('/signup', authController.signUp)
router.get('/signin', authController.signIn)
router.get('/signout', authController.signOut)

module.exports = router