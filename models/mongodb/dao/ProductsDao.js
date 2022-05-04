import ContainerMongoDB from '../container/ProductsContainer.js'
import { ProductDTO } from '../dto/ProductDTO.js'

class ProductsDaoMongoDB extends ContainerMongoDB {

    constructor() {
        super('producto', {
            nombre: { type: String, required: true, max: 100},
            descripcion: { type: String, required: true, max: 100},
            precio: { type: Number, required: true },
            stock: { type: Number, required: true },
            thumbnail: { type: String, required: true, max: 250},
        }, ProductDTO)
    }
}

export { ProductsDaoMongoDB }