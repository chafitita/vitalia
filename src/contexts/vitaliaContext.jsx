import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const VitaliaContext = createContext()

export function VitaliaContextProvider(props){

    const [especialidad, setEspecialidad] = useState([])
    const [especialidadElegida, setEspecialidadElegida] = useState([])
    const [doctor, setDoctor] = useState([])
    const [fecha, setFecha] = useState(null)
    const [horario, setHorario] = useState([])

    //llamados al back
    const handleDoctores = () => {
        axios.get(`http://localhost:8080/doctores/`)
              .then((data) => {
                console.log("doctores", data.data) 
                setDoctor(data.data)
              })
              .catch((error) => {
                console.log("Error!:", error)
              })
    }
    const handleEspecialidades = () => {
        axios.get(`http://localhost:8080/especialidades/`)
              .then((data) => {
                console.log("especialidades", data.data) 
                setEspecialidad(data.data)
              })
              .catch((error) => {
                console.log("Error!:", error)
              })
    }
        const handleHorarios = () => {
        axios.get(`http://localhost:8080/horarios   /`)
              .then((data) => {
                console.log("horarios", data.data) 
                setHorario(data.data)
              })
              .catch((error) => {
                console.log("Error!:", error)
              })
    }
    useEffect(() => {
        handleEspecialidades();
        handleDoctores();
        handleHorarios();
    }, []);

    const VitaliaData = {
        especialidad, setEspecialidad,
        doctor, setDoctor,
        fecha, setFecha,
        horario, setHorario,
        especialidadElegida, setEspecialidadElegida
    }
    return(
        <VitaliaContext.Provider value={VitaliaData}>{props.children}</VitaliaContext.Provider>
    )
}