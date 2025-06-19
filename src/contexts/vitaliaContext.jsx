import { useState } from "react";
import { createContext } from "react";

export const VitaliaContext = createContext()

export function VitaliaContextProvider(props){

    const [especialidad, setEspecialidad] = useState('')
    const [doctor, setDoctor] = useState('')
    const [fecha, setFecha] = useState(null)
    const [horario, setHorario] = useState('')

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [dni, setDni] = useState('')

    const resetTurno = () => {
        setEspecialidad('')
        setDoctor('')
        setFecha(null)
        setHorario('')
        setNombre('')
        setApellido('')
        setEmail('')
        setDni('')
    }

    const VitaliaData = {
        especialidad, setEspecialidad,
        doctor, setDoctor,
        fecha, setFecha,
        horario, setHorario,
        nombre, setNombre,
        apellido, setApellido,
        email, setEmail,
        dni, setDni,
        resetTurno
    }
    return(
        <VitaliaContext.Provider value={VitaliaData}>{props.children}</VitaliaContext.Provider>
    )
}