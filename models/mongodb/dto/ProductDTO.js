class ProductDTO {

    constructor(producto) {
        this.nombre = producto.nombre
        this.precio = producto.precio
        this.descripcion = producto.descripcion
        this.stock = producto.stock
        this.thumbnail = producto.thumbnail
        this.id = producto._id
    }

}
  
export { ProductDTO }