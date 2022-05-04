import app from './server.js'
import 'dotenv/config'

//start server
app.listen(process.env.PORT, () => {
    console.log(`Server escuchando en el puerto ${app.get('port')} . . .`)
})