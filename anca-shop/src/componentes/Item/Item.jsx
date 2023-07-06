import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
  const formattedPrecio = precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

  return (
    <div className="itemContainer">
      <img className="itemImage" src={img} alt={nombre} />
      <div className="itemDetails">
        <h3>Nombre: {nombre}</h3>
        <p>Precio: {formattedPrecio}</p>
        <p>ID: {id}</p>
      </div>
      <Link to={`/alimento/${id}`}>
        <button className="verDetallesButton">Ver detalles</button>
      </Link>
    </div>
  );
};

export default Item;
