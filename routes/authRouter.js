import { Router } from 'express'
import * as auth from '../controllers/authController.js'
import passport from 'passport'

const authRouter = new Router()

authRouter.get('/register', auth.getSignUpController)
authRouter.post('/register', passport.authenticate("register", {
    successRedirect: '/login',
    failureRedirect: '/register',
    passReqToCallback: true
}))
authRouter.get('/login', auth.getSignInController)
authRouter.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login',
    passReqToCallback: true
}))
authRouter.get('/logout', auth.getLogOutController)

export default authRouter