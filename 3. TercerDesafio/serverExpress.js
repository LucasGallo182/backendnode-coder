const Contenedor = require("./Contenedor")
const express = require('express')
const app = express()

const PORT = 8080

const contenedor = new Contenedor("products.txt")

//Get /
app.get('/', (req, res) => {
    res.send('Hi Express Server!')
})

//Get /productos
app.get('/productos', async (req, res) => {
    const allProducts = await contenedor.getAll();
    res.json(allProducts)
})

//Get /productoRandom
app.get('/productoRandom', async (req, res) => {
    const allProducts = await contenedor.getAll()
    const maxId = allProducts.length

    const randomId = getRandomNumber(1, maxId)
    //Get by id
    const randomProduct = await contenedor.getById(randomId)

    res.json(randomProduct)
})

//Random number
const getRandomNumber = (minNumber, maxNumber) => {
    //Math.random() * (maxNumber - minNumber) + minNumber -> que se encuentre entre esos numeros (max, min)
    return Math.floor(Math.random() * ((maxNumber + 1) - minNumber)) //Agrego +1 al maxNumber, porque nunca llega al maximo, sino entre el menor y el numero anterior al maximo
}

//Connect Server
const server = app.listen(PORT, () => {
    console.log(`Server started at port: ${server.address().port}`)
})

//Error
server.on('error', (error) => console.log(error))