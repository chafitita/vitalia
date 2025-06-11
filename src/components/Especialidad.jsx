import  Select  from "./materialUI/Select";
import "../css/App.css"
import Pasos from "./materialUI/Pasos";

export const Especialidad = () => {
  return(
    <>
    <Pasos />
      <div className="main">
        <h1>Paso 1</h1>
        <h2 className="sub-title">Selecciona la especialidad que buscas</h2>
        <Select />
      </div>
    </>
  )
}