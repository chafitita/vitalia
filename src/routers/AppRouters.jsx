import { Route, Routes, Navigate } from "react-router"
import { Home } from "./Home"
import { Especialidad }  from "./Especialidad"
import { Doctor } from "./Doctor"
import { FechaHorario } from "./FechaHorario"
import { Confirmación } from "./Confirmación"
import { Finalización } from "./Finalización"
import { Paciente } from "./Paciente"


export const AppRouters = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="especialidad" element={<Especialidad />}/>
        <Route path="doctor" element={<Doctor />}/>
        <Route path="fecha-horario" element={<FechaHorario />}/>
        <Route path="paciente" element={<Paciente />}/>
        <Route path="confirmación" element={<Confirmación />}/>
        <Route path="finalización" element={<Finalización />}/>
    </Routes>
  )
}
