import { Card, CardContent, Button, Typography } from "@mui/material";
import { useContext } from 'react'
import { VitaliaContext } from '../contexts/vitaliaContext'
import { useNavigate } from "react-router";

export default function ShiftCard(){
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/pasos/finalización')
    }

    const { especialidad, doctor, fecha, horario, nombre, apellido, dni, email } = useContext(VitaliaContext)
    
    return(
        <Card sx={{ maxWidth: 400, margin: 'auto', p: 2 }}>
            <CardContent>
                <Typography variant='subtitle1' color='text.secondary'>Paciente:</Typography>
                <Typography variant='h6' color='black' gutterBottom>{nombre || 'No seleccionada'}</Typography>
                <Typography variant='h6' color='black' gutterBottom>{apellido || 'No seleccionada'}</Typography>
                <Typography variant='h6' color='black' gutterBottom>{dni || 'No seleccionada'}</Typography>
                <Typography variant='h6' color='black' gutterBottom>{email || 'No seleccionada'}</Typography>

                <Typography variant='subtitle1' color='text.secondary'>Especialidad:</Typography>
                <Typography variant='h6' color='black' gutterBottom>{especialidad || 'No seleccionada'}</Typography>

                <Typography variant='subtitle1' color='text.secondary'>Doctor:</Typography>
                {doctor ? (
                <Typography variant='h6' color='black' gutterBottom>
                    {doctor.nombre} <br/>
                    <Typography component="span" variant="body2" color="text.secondary">Clínica: {doctor.clinica}, Consultorio: {doctor.consultorio}</Typography>
                </Typography>
                ) : (
                <Typography variant='h6' color='black' gutterBottom>No seleccionado</Typography>
                )}

                <Typography variant='subtitle1' color='text.secondary'>Fecha:</Typography>
                <Typography variant='h6' color='black' gutterBottom>
                {fecha ? fecha.format('DD/MM/YYYY') : 'No seleccionada'}
                </Typography>

                <Typography variant='subtitle1' color='text.secondary'>Horario:</Typography>
                <Typography variant='h6' color='black' gutterBottom>{horario || 'No seleccionado'}</Typography>

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
