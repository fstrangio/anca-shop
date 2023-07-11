import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({ nombre, img, id, precio, detalle }) => {
  const formattedPrecio = precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

  return (
    <div className="itemDetailContainer">
      <h4>{nombre}</h4>
      <img className="itemImage" src={img} alt={nombre} loading="lazy" />
      <p>ID: {id}</p>
      <p>Precio: {formattedPrecio}</p>
      <p>Detalle: {detalle}</p>
    </div>
  );
};

export default ItemDetail;
