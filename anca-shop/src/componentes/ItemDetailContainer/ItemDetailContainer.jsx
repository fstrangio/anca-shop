import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const productId = parseInt(itemId); // Convertir el ID a number
    getUnProducto(productId)
      .then(respuesta => {
        setProducto(respuesta);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {producto && <ItemDetail {...producto} />}
    </div>
  );
};

export default ItemDetailContainer;
