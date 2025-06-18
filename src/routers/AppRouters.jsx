import { Route, Routes, Navigate } from "react-router"
import HorizontalLinearStepper from "../components/Stepper"
import { Home } from "./Home"
import { Especialidad }  from "./Especialidad"
import { Doctor } from "./Doctor"
import { FechaHorario } from "./FechaHorario"
import { Confirmación } from "./Confirmación"


export const AppRouters = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        
        {/* evita que el usuario pueda, por ejemplo poner "localhost/especialidad"
        rompiendo el stepper e inutilizando la aplicación */}
        <Route path="/especialidad" element={<Navigate to="/pasos/especialidad" replace />} />
        
        {/* define cada paso como elemento diferente para ser renderizado por
        el stepper */}
        <Route path="/pasos" element={<HorizontalLinearStepper />}>
          <Route path="especialidad" element={<Especialidad />}/>
          <Route path="doctor" element={<Doctor />}/>
          <Route path="fecha-horario" element={<FechaHorario />}/>
          <Route path="confirmación" element={<Confirmación />}/>
        </Route>

    </Routes>
  )
}
