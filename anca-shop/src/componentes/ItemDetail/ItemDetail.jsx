import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Este alimento contiene todos los nutrientes necesarios para tener huesos fuertes y sanos, y ayuda a tener un pelaje acorde a la raza</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail