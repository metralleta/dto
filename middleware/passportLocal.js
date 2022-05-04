import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { usersDao } from '../models/index.js'
import bcrypt from 'bcrypt'

passport.serializeUser((user, done) => {
    done(null, user)
})
  
passport.deserializeUser((user, done) => {
    done(null, user)
})

passport.use('register', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, async (req, email, password, done) => {
            const newUser = {
                nombre: req.body.name,
                apellido: req.body.lastname,
                email: email,
                password: await bcrypt.hash(password, 10)
            }
            await usersDao.save(newUser)
            done(null, newUser)   
        }
    )
)

passport.use('login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true    
    }, async (req, email, password, done) => {
            const user = await usersDao.getByEmail(email)
            if (!user) {
                return done(null, false, { message: 'Usuario no encontrado' })
            }
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Contraseña incorrecta' })
            }
        }
    )
)

export default passport