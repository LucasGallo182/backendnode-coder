const Contenedor = require('./contenedor.js')

//New Contenedor
const newContainer = new Contenedor('products.txt')

const globalFunction = async () => {
    //Save
    await newContainer.save({title: 'Dragon Ball Z: Fighter Z', price: 5000, thumbnail: 'https://i.ibb.co/8NyJF70/dbz.jpg'})
    await newContainer.save({title: 'The Marvel: Spiderman', price: 4500, thumbnail: 'https://i.ibb.co/rm8Bq2g/spiderman.png'})
    await newContainer.save({title: 'The Last Of Us', price: 3200, thumbnail: 'https://i.ibb.co/kXhSmRP/thelastofus.png'})

    //Get by id
    const getId = await newContainer.getById(2)
    console.log(getId)

    //Delete by id
    await newContainer.deleteById(2)

    //Get all
    const getAll = await newContainer.getAll()
    console.log(getAll)

    //Delete all
    await newContainer.deleteAll()
}

globalFunction()