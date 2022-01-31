const User = require('../models/user')

module.exports.renderRegister = (req, res) => { }

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password } = req.body
        const user = new User({ email, username })
        const registerdUser = await User.register(user, password)
        req.login(registerdUser, err => {
            if (err) return next(err)
            req.flash('success', 'Welcome to ') //todo add
            res.redirect('/')

        })
    } catch (err) {
        req.flash('error', err.message)
        res.redirect('register')
    }
}


module.exports.renderLogin = (req, res) => { }

module.exports.login = async (req, res) => {
    req.flash('success', 'Welcome back !')
    const redirectUrl = req.session.returnTo || '/'
    delete req.session.returnTo
    res.redirect(redirectUrl)
}

module.exports.logout = (req, res) => {
    req.logout()
    req.flash('success', 'Goodbye!')
    res.redirect('/')
}