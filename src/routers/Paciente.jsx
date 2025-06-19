import '../css/App.css'
import PacientData from '../components/PacientData'

export const Paciente = () => {
  return (
    <>
        <div className="main">
            <div className="content">
                <h1>Paso 4</h1>
                <h2 className="sub-title">Ingrese sus datos</h2>
            </div>
            <PacientData />
        </div>
    </>
  )
}
