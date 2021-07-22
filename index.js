const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 8000

app.use(cookieParser())

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const passport = require('./lib/passport')
app.use(passport.initialize())

const routes = require('./routes')
app.use(routes)

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))