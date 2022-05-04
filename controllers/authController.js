async function getSignUpController(req, res) {
    res.render('register', { layout: false })
}

async function getSignInController(req, res) {
    res.render('login', { layout: false })
}

async function getLogOutController(req, res) {
    req.logout()
    res.redirect('/login')
}

export { getSignUpController, getSignInController, getLogOutController }