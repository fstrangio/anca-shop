import { useParams } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Alimento = () => {
  const { producto } = useParams();
  const productoSeleccionado = producto !== undefined;

  return (
    <div>
      <h2>Tenemos alimento para todas las razas y tamaños</h2>
      <ItemListContainer/>
      {productoSeleccionado && <strong>Buscamos: {producto}</strong>}
      <ItemDetailContainer/>
    </div>
  );
};

export default Alimento;


