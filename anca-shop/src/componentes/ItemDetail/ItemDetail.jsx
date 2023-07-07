import React from 'react';

const ItemDetail = ({ id, nombre, precio, img, detalle }) => {
  return (
    <div>
      <h4>Nombre: {nombre}</h4>
      <p>Precio: {precio}</p>
      <p>ID: {id}</p>
      <p>Detalle: {detalle}</p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
