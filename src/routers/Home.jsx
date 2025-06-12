import { useNavigate } from "react-router"

export const Home = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/pasos/especialidad');
  }

  return (
    <div className="main">
        <div className="title">
            <h2>Vitalia</h2>
        </div>
        <div className="content">
            <h1>BIENVENIDO/A</h1>
            <p>¿Qué deseás hacer hoy?</p>
            <button onClick={handleClick}>
                Quiero sacar un turno
            </button>
        </div>
    </div>
  )
}
