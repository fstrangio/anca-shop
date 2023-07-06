import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { productoId } = useParams();

  useEffect(() => {
    getUnProducto(parseInt(productoId))
      .then(res => setProducto(res));
  }, [productoId]);

  return (
    <div>
      {producto && (
        <>
          <ItemDetail producto={producto} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
