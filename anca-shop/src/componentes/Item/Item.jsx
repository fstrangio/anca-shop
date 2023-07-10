import React, { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ nombre, img, id, precio, categoria, detalle }) => {
  const formattedPrecio = precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  const toggleDetalle = () => {
    setMostrarDetalle(!mostrarDetalle);
  };

  return (
    <div className="itemContainer">
      <img className="itemImage" src={img} alt={nombre} />
      <div className="itemDetails">
        <h4>Nombre: {nombre}</h4>
        <p>ID: {id}</p>
        <p>Precio: {formattedPrecio}</p>
        <p>Categoría: {categoria}</p>
        <Link to={`/alimento/${id}`}>
          <button className="verDetallesButton" onClick={toggleDetalle}>
            {mostrarDetalle ? 'Ocultar detalles' : 'Ver detalles'}
          </button>
        </Link>
      </div>
      {mostrarDetalle && (
        <div className="detalleContainer">
          <p className="detalleTexto">Detalle: {detalle}</p>
        </div>
      )}
    </div>
  );
};

export default Item;
