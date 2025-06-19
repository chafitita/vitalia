import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const VitaliaContext = createContext()

export function VitaliaContextProvider(props){

    const [especialidad, setEspecialidad] = useState([])
    const [especialidadElegida, setEspecialidadElegida] = useState([])
    const [doctor, setDoctor] = useState([])
    const [doctorElegido, setDoctorElegido] = useState([])
    const [fecha, setFecha] = useState(null)
    const [horario, setHorario] = useState([])
    const [horarioElegido, setHorarioElegido] = useState(null)

    //llamados al back

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
    // Aquí puedes necesitar pasar el doctor o la fecha para obtener horarios específicos
    axios.get(`http://localhost:8080/horarios/`)
      .then((data) => {
        console.log("horarios", data.data);
        setHorario(data.data);
      })
      .catch((error) => {
        console.error("Error al obtener horarios:", error);
      });
  };

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

    useEffect(() => {
        handleEspecialidades();
    }, []);

    const VitaliaData = {
        especialidad, setEspecialidad,
        doctor, setDoctor,
        fecha, setFecha,
        horario, setHorario,
        especialidadElegida, setEspecialidadElegida,
        doctorElegido, setDoctorElegido,
        nombre, setNombre,
        apellido, setApellido,
        email, setEmail,
        dni, setDni,
        horarioElegido, setHorarioElegido,
        resetTurno

    }
    return(
        <VitaliaContext.Provider value={VitaliaData}>{props.children}</VitaliaContext.Provider>
    )
}