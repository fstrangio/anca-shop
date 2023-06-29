import { useParams } from "react-router-dom"

const Ropa = () => {
  const { producto } = useParams();
  return (
    <div>
      <h2>Todo lo que necesitás para vestir a tu mascota amiga</h2>
      {producto && <strong>Buscamos: {producto}</strong>}
    </div>

  )
}

export default Ropa