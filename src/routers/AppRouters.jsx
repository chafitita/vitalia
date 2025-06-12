import { Route, Routes, Navigate } from "react-router"
import HorizontalLinearStepper from "../components/Stepper"
import { Home } from "./Home"
import { Especialidad }  from "./Especialidad"


export const AppRouters = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}>Home</Route>

        <Route path="/especialidad" element={<Navigate to="/pasos/especialidad" replace />} />

        <Route path="/pasos" element={<HorizontalLinearStepper />}>
          <Route path="especialidad" element={<Especialidad />}/>
        </Route>

    </Routes>
  )
}
