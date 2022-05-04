import mongoose from 'mongoose'

class ContainerMongoDB {

    constructor(nombreColeccion, esquema, DTO) {
        this.productos = mongoose.model(nombreColeccion, esquema)
        this.DTO = DTO
    }

    async save(producto) {
        try {
            const productoSaveModel = new this.productos(producto)
            return await productoSaveModel.save()
        } catch (error) {
            console.log(`Error al guardar el producto.`)
            throw new Error(error)
        }
    }
    
    async getAll() {
        try {
            const productos = await this.productos.find({}).lean()
            return productos.map(productos => new this.DTO(productos))
        } catch (error) {
            console.log(`Error al obtener todos los productos.`)
            throw new Error(error)
        }
    }

    async getByID(id) {
        try {
            return await this.productos.findOne({ _id: id }).lean()
        } catch (error) {
            console.log(`Error al obtener el producto pasado por id.`)
            throw new Error(error)
        }
    }

    async update(id, producto) {
        console.log('puto el que lee')
        try {
            return await this.productos.findOneAndUpdate({ _id: id }, producto)
        } catch (error) {
            console.log(`Error al modificar el producto.`)
            throw new Error(error)
        }
    }

    async delete(id) {
        try {
            return await this.productos.deleteOne({ _id: id})
        } catch (error) {
            console.log(`Error al eliminar el producto.`)
            throw new Error(error)
        }
    }

}

export default ContainerMongoDB