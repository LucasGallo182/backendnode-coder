class Usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre
        this.apellido = apellido
        this.mascotas = mascotas
        this.libros = libros
    }

    //Func nombre completo
    getFullName() {
        return `El nombre completo es: ${this.nombre} ${this.apellido}`
    }

    //Func agregar mascota
    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota)
    }

    //Func contar mascotas
    countMascotas() {
        return `La cantidad de mascotas es: ${this.mascotas.length}`
    }

    //Func agregar libro
    addBook(titulo, autor) {
        this.libros.push({ nombre: titulo, autor: autor })
    }

    //Func obtener nombre de libros
    getBookNames() {
        return this.libros.map(libro => libro.nombre)
    }
}

//Crear nuevo usuario completo
const usuarioEjemplo = new Usuario('Enzo', 'Perez', ['Fatiga', 'Yummi'], [{nombre: 'El Principito', autor: 'Antoine de Saint-Exupéry'}])
console.log(usuarioEjemplo)


//getFullName() = Agregar y obtener nombre completo
console.log(usuarioEjemplo.getFullName())

//countMascotas() = Cuenta cantidad de mascotas que tiene el usuario
console.log(usuarioEjemplo.countMascotas()) //2
//addMascota(string) = Agregar mascotas al array y mostrarlo
usuarioEjemplo.addMascota('Trini')
console.log(usuarioEjemplo.mascotas)
//Vuelvo a contar cantidad de mascotas
console.log(usuarioEjemplo.countMascotas()) //3

//Mostrar titulo de libros
console.log(usuarioEjemplo.getBookNames())
//addBook() = agrega un libro
usuarioEjemplo.addBook('El extranjero', 'Albert Camus')
//Vuelvo a mostrar titulos de libros y verifico que se agregó
console.log(usuarioEjemplo.getBookNames())