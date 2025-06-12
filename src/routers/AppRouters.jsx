import { Route, Routes } from "react-router"

import { Home } from "../routers/Home"
import { Especialidad }  from "../routers/Especialidad"

export const AppRouters = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/especialidad" element={<Especialidad />}>Especialidad</Route>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/" element={<Home />}>Home</Route>
    </Routes>
  )
}
