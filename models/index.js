import 'dotenv/config'

const { productsDao, usersDao } = await import(`./${process.env.PERS}/index.js`)

export { usersDao, productsDao }