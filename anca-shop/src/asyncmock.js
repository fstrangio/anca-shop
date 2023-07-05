const misProductos = [
    {id:1, nombre: "Royal Canin", precio: 15500, img: "./img/royalcanin.jpg"},
    {id:2, nombre: "Eukanuba", precio: 16000, img: "./img/eukanuba.jpg"},
    {id:3, nombre: "Pedigree", precio: 12000, img: "./img/pedigree.jpg"},
]

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(misProductos);
        },2000)
    })
}

//Creamos una función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        })
    })
}