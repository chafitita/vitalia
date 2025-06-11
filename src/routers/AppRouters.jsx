import { Route, Routes } from "react-router"

import { Home } from "./Home"
import { Especialidad }  from "./Especialidad"

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
