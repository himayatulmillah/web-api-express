const router = require('express').Router()
const authRouter = require('./authRouter')
const articleRouter = require('./articleRouter')
const portofolioRouter = require('./portofolioRouter')
const restrict = require('../middlewares/restrict')

router.use('/', authRouter)
router.use('/article', restrict, articleRouter)
router.use('/portofolio', restrict, portofolioRouter)

module.exports = router