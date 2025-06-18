import { useState } from "react";
import { createContext } from "react";

export const VitaliaContext = createContext()

export function VitaliaContextProvider(props){

    const [especialidad, setEspecialidad] = useState('')
    const [doctor, setDoctor] = useState('')
    const [fecha, setFecha] = useState(null)
    const [horario, setHorario] = useState('')

    const resetTurno = () => {
        setEspecialidad('')
        setDoctor('')
        setFecha(null)
        setHorario('')
    }

    const VitaliaData = {
        especialidad, setEspecialidad,
        doctor, setDoctor,
        fecha, setFecha,
        horario, setHorario,
        resetTurno
    }
    return(
        <VitaliaContext.Provider value={VitaliaData}>{props.children}</VitaliaContext.Provider>
    )
}