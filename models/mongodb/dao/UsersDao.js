import ContainerMongoDB from '../container/UsersContainer.js'

class UsersDaoMongoDB extends ContainerMongoDB {

    constructor() {
        super('usuario', {
            nombre: {type: String, required: true, max: 100},
            apellido: {type: String, required: true, max: 100},
            email: {type: String, required: true, unique: true, max: 100},
            password: {type: String, required: true, max: 250},
        })
    }
}

export { UsersDaoMongoDB }