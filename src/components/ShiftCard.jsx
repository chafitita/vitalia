import { Card, CardContent, Button, Typography } from "@mui/material";
import { useContext } from 'react'
import { VitaliaContext } from '../contexts/vitaliaContext'
import { useNavigate } from "react-router";

import '../css/App.css'
import '../css/ShiftCard.css'

export default function ShiftCard(){
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/finalización')
    }

    const { 
    especialidadElegida,
    doctorElegido,
    fecha, 
    horarioElegido,
    nombre, 
    apellido, 
    dni, 
    email 
  } = useContext(VitaliaContext);
    
    return(
        <Card sx={{ maxWidth: 400, margin: 'auto', p: 2, display: 'scroll' }}>
            <CardContent>
                <Typography variant='subtitle1' color='text.secondary'>Datos del paciente:</Typography>
                <Typography color='textSecondary' variant='subtitle1' gutterBottom>Nombre: {nombre || 'No ingresado'}</Typography>
                <Typography color='textSecondary' variant='subtitle1' gutterBottom>Apellido: {apellido || 'No ingresado'}</Typography>
                <Typography color='textSecondary' variant='subtitle1' gutterBottom>DNI: {dni || 'No ingresado'}</Typography>
                <Typography color='textSecondary' variant='subtitle1' gutterBottom>E-mail: {email || 'No ingresado'}</Typography>

                <Typography variant='subtitle1' color='text.secondary'>Especialidad:</Typography>
                <Typography variant='h6' color='black' gutterBottom>{especialidadElegida ? especialidadElegida.nombre : 'No seleccionada'}</Typography>

                <Typography variant='subtitle1' color='text.secondary'>Doctor:</Typography>
                {doctorElegido ? (
                <Typography variant='h6' color='black' gutterBottom>
                    {doctorElegido.nombre} <br/>
                    <Typography component="span" variant="body2" color="text.secondary">
                        Clínica: {doctorElegido.clinica}, 
                        Consultorio: {doctorElegido.consultorio}
                        </Typography>
                </Typography>
                ) : (
                <Typography variant='h6' color='black' gutterBottom>No seleccionado</Typography>
                )}

                <Typography variant='subtitle1' color='text.secondary'>Fecha:</Typography>
                <Typography variant='h6' color='black' gutterBottom>
                {fecha ? fecha.format('DD/MM/YYYY') : 'No seleccionada'}
                </Typography>

                <Typography variant='subtitle1' color='text.secondary'>Horario:</Typography>
                <Typography variant='h6' color='black' gutterBottom>{horarioElegido ? (typeof horarioElegido === 'object' ? horarioElegido.hora : horarioElegido) : 'No seleccionado'}</Typography>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#00C3A5',
                        '&:hover': { backgroundColor: '#00A88D' }
                    }}
                    onClick={handleClick}
                    fullWidth
                    >
                    Confirmar
                </Button>
            </CardContent>
            </Card>
    )
}
