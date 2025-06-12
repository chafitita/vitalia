import  Select  from "../components/Select";
import Stepper from "../components/Stepper"
import "../css/App.css"


export const Especialidad = () => {
  return(
    <>
      <div className="main">
        <div className="content">
          <h1>Paso 1</h1>
          <h2 className="sub-title">Selecciona la especialidad que buscas</h2>
          <Select />
        </div>
      </div>
    </>
  )
}