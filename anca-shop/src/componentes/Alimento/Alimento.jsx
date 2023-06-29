import { useParams } from 'react-router-dom'

const Alimento = () => {
  const { producto } = useParams();
  return (
    <div>
      <h2>Tenemos alimento para todas las razas y tamaños</h2>
      {producto && <strong>Buscamos: {producto}</strong>}
    </div>
  )
}

export default Alimento