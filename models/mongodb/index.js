import mongoose from 'mongoose'
import 'dotenv/config'

 try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    })
    console.log(`Conexión a la base de datos MongoDB Atlas exitosa!`)
} catch (error) {
    console.log(`Error al conectarse a la base de datos.`)
    throw new Error(error)
}

const { UsersDaoMongoDB } = await import('./dao/UsersDao.js')
const { ProductsDaoMongoDB } = await import('./dao/ProductsDao.js')

const usersDao = new UsersDaoMongoDB()
const productsDao = new ProductsDaoMongoDB()

export { usersDao, productsDao }