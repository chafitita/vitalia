import { Route, Routes } from "react-router"

import { Home } from "../components/Home"
import { Especialidad }  from "../components/Especialidad"

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
