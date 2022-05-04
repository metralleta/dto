import { productsDao } from '../models/index.js'

async function getProductoController(req, res) {
    const obtenerProductos = await productsDao.getAll()
    console.log(obtenerProductos)
    res.render('productos', {
        productos: obtenerProductos,
        user: req.user
    })
}

async function getNewProductoController(req, res) {
    res.render('new_productos', { user: req.user })
}

async function getUpdateProductoController(req, res) {
    const producto = await productsDao.getByID(req.params.id)
    res.render('put_productos', {
        user: req.user,
        product: producto
    })
}

async function postProductoController(req, res) {
    const producto = {
        nombre: req.body.name,
        descripcion: req.body.description,
        precio: parseFloat(req.body.price),
        stock: req.body.stock,
        thumbnail: req.body.thumb
    }
    await productsDao.save(producto)
    const obtenerProductos = await productsDao.getAll()
    res.render('productos', {
        productos: obtenerProductos,
        user: req.user
    })   
}

async function putProductoController(req, res) {
    const producto = {
        nombre: req.body.name,
        descripcion: req.body.description,
        precio: parseFloat(req.body.price),
        stock: req.body.stock,
        thumbnail: req.body.thumb
    }
    await productsDao.update(req.params.id, producto)
    const obtenerProductos = await productsDao.getAll()
    res.render('productos', {
        productos: obtenerProductos,
        user: req.user
    })
}

async function deleteProductoController(req, res) {
    await productsDao.delete(req.params.id)
    const obtenerProductos = await productsDao.getAll()
    res.render('productos', {
        productos: obtenerProductos,
        user: req.user
    })
}

export { 
    getProductoController,
    postProductoController,
    putProductoController,
    deleteProductoController,
    getNewProductoController,
    getUpdateProductoController
}