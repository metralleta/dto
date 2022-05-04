import { Router } from 'express'
import {
    getProductoController,
    postProductoController,
    putProductoController,
    deleteProductoController,
    getNewProductoController,
    getUpdateProductoController
} from '../controllers/productController.js'
import isAuthenticated from '../middleware/isAuth.js'

const routerProducto = new Router()

routerProducto.get('/productos', isAuthenticated, getProductoController)
routerProducto.get('/productos/new', isAuthenticated, getNewProductoController)
routerProducto.get('/productos/update/:id', isAuthenticated, getUpdateProductoController)
routerProducto.post('/productos', isAuthenticated, postProductoController)
routerProducto.put('/productos/:id', isAuthenticated, putProductoController)
routerProducto.delete('/productos/:id', isAuthenticated, deleteProductoController)

export default routerProducto