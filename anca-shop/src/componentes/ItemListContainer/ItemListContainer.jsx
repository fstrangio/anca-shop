import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      getProductosPorCategoria(categoriaId)
        .then((respuesta) => setProductos(respuesta))
        .catch((error) => console.error(error));
    } else {
      getProductos()
        .then((respuesta) => setProductos(respuesta))
        .catch((error) => console.error(error));
    }
  }, [categoriaId]);

  return (
    <div>
      <h2>Mis Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
