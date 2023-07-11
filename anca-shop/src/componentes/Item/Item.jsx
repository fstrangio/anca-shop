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
    <div className="card">
      <h4>{nombre}</h4>
      <img className="itemImage" src={img} alt={nombre} loading="lazy" />
      <div className="card-body">
        <p>ID: {id}</p>
        <p>Precio: {formattedPrecio}</p>
        <p>Categoría: {categoria}</p>
        <Link to={`/item/${id}`}>
          <button className="verDetallesButton" onClick={toggleDetalle}>
            {mostrarDetalle ? 'Ocultar detalles' : 'Ver detalles'}
          </button>
        </Link>
        {mostrarDetalle && (
          <div className="detalleContainer">
            <p className="detalleTexto">Detalle: {detalle}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
