const { User } = require('../models')
const bycrpt = require('bcrypt')
const passport = require('passport')
const jwt = require('../lib/jwt')

function format (user) {
    const { id, username } = user
    return {
        id,
        username,
        accessToken: jwt.generateToken({id, username})
    }
} 

module.exports = {
    signUp: (req, res) => {
        const {username, password} = req.body
        const encryptedPassword = bycrpt.hashSync(password, 10)
        User.create({
            username,
            password: encryptedPassword
        }).then(user => {
            res.status(201).json(user)
        })
    },
    signIn: (async(req, res) => {
        try {
            const {username, password} = req.body

            const user = await User.findOne({ where: {username: username} })
            if (!user) return console.log('user not found')

            const isPasswordValid = bycrpt.compareSync(password, user.password)
            if (!isPasswordValid) return console.log('password invalid')

            const userLogin = format(user)
            res.cookie('token', userLogin.accessToken, {httpOnly: true})
            return res.status(200).json(userLogin)
        }
        catch (err) {
            return console.log(err)
        }
    }),
    signOut: (req, res) => {
        res.clearCookie('token')
        return res.status(200).json("You've been signed out successfully")
    },
}