import { useParams } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Alimento = () => {
  const { producto } = useParams();
  return (
    <div>
      <h2>Tenemos alimento para todas las razas y tamaños</h2>
      {producto && <strong>Buscamos: {producto}</strong>}
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  )
}

export default Alimento