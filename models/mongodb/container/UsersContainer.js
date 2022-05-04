import mongoose from 'mongoose'

class ContainerMongoDB {

    constructor(nombreColeccion, esquema) {
        this.users = mongoose.model(nombreColeccion, esquema)
    }

    async save(usuario) {
        try {
            const usuarioSaveModel = new this.users(usuario)
            return await usuarioSaveModel.save()
        } catch (error) {
            console.log(`Error al guardar el usuario.`)
            throw new Error(error)
        }
    }

    async getAll() {
        try {
            return await this.users.find({})
        } catch (error) {
            console.log(`Error al obtener todos los usuarios.`)
            throw new Error(error)
        }
    }

    async getByEmail(email) {
        try {
            return await this.users.findOne({email})
        } catch (error) {
            console.log(`Error al obtener el usuario por el mail dado ${email}`)
            throw new Error(error)
        }
    }

    async getByID(id) {
        try {
            return await this.users.findOne({_id: id})
        } catch (error) {
            console.log(`Error al obtener el usuario por el mail dado ${email}`)
            throw new Error(error)
        }
    }

    async delete(id) {
        try {
            return await this.users.deleteOne({_id: id})
        } catch (error) {
            console.log(`Error al eliminar el usuario por el id ${id}`)
            throw new Error(error)
        }
    }

}

export default ContainerMongoDB