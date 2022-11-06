//Contenedor
const Contenedor = require('./Contenedor')
const newContainer = new Contenedor('products.json')

//Express
const express = require('express')
const app = express()

const PORT = 8080

//Parsear envio de datos(object) a req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Set app (pug)
app.set('views', './views') //Especifica el directorio de vistas
app.set('view engine', 'pug') //Registra el motor de plantillas

//GetList
app.get('/productos', async(req, res) => {
    const products = await newContainer.getAll();
    res.render('listProducts', {products: products})
})

//AddProduct (form)
app.get('/', (req,res) => {
    res.render('form', {})
})

//AddProduct fn
app.post('/productos', async(req,res) => {
    const dataBody = req.body
    await newContainer.save(dataBody)
    res.redirect('/')
})

//Server
const server = app.listen(PORT, () => {
    console.log(`Server listening in port: ${server.address().port}`)
})
//ServerError
server.on('error', error => {
    console.log(error)
})