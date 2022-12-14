const Contenedor = require("./Contenedor")
const express = require('express')
const app = express()

//Lineas para usar json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(__dirname + '/public'))

//Router
const { Router } = express
const routeProduct = Router()

//NewContainer
const contenedor = new Contenedor('products.json')

// ***************ENDPOINTS**************
app.use('/api/productos', routeProduct)

//GET '/api/productos'
routeProduct.get('/', async (req, res) => {
    const allProducts = await contenedor.getAll();
    res.status(200).json(allProducts)
})

//GET '/api/productos/:id'
routeProduct.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const product = await contenedor.getById(id)
    product
        ? res.status(200).json(product)
        : res.status(404).json({ error: 'Producto no encontrado' })
})

//POST '/api/productos'
routeProduct.post('/', async (req, res) => {
    const body = req.body
    const newProductId = await contenedor.save(body)
    res.status(200).send(`Producto agregado correctamente con el id: ${newProductId}`)
})

//PUT '/api/productos/:id'
routeProduct.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const body = req.body
    const productUpdated = await contenedor.updateById(id, body)
    productUpdated
        ? res.status(200).send(`El producto de ID: ${id} ha sido actualizado`)
        : res.status(404).send({ error: 'Producto no encontrado' })
})

//DELETE '/api/productos/:id'
routeProduct.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const deletedProduct = await contenedor.deleteById(id)
    deletedProduct
        ? res.status(200).json(`El producto con id: ${id} ha sido eliminado.`)
        : res.status(404).json({ error: 'Producto no encontrado' })
})

// ***************ENDPOINTS**************

//Connect Server
const PORT = 8080 //PORT
const server = app.listen(PORT, () => {
    console.log(`Server started at port: ${server.address().port}`)
})

//Error
server.on('error', (error) => console.log(error))