import { Router } from 'express'
import isAuthenticated from '../middleware/isAuth.js'

const dashboardRouter = new Router()

dashboardRouter.get('/', isAuthenticated, (req, res) => {
    res.render('index', { user: req.user })
})

export default dashboardRouter