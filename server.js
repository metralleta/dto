import express from 'express'
import authRouter from './routes/authRouter.js'
import dashboardRouter from './routes/dashboardRouter.js'
import productRouter from './routes/productRouter.js'
import { engine } from 'express-handlebars'
import morgan from 'morgan'
import passport from './middleware/passportLocal.js'
import session from 'express-session'
import methodOverride from 'method-override'

const app = express()

// app port
app.set('port', process.env.PORT || 3000)

// template engine
app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: 'hbs'
}))
app.set('view engine', 'hbs')

// middlewares
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method', {methods: ['POST', 'GET']}))

// routes
app.use('/', authRouter)
app.use('/', dashboardRouter)
app.use('/', productRouter)

export default app