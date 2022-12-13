const config = require("../../config/config")
const contenedor = require("../../container/firebase")

const productos = new contenedor("products")

const crud = async () => {
    await config.initFirebase()
    //await productos.save({title: "DBZ: Tenkaichi 3", price: 565, thumbnail: "https://i.ibb.co/8NyJF70/dbz.jpg"})
    //await productos.getAll()
    //await productos.getById("BkbH848eWU3fMkG7w5Ax")
    //await productos.deleteById("BkbH848eWU3fMkG7w5Ax")
    //await productos.deleteAll()
}

crud()