import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Typography, Button } from '@mui/material';
import dayjs from 'dayjs';

import '../css/BasicDatePicker.css'

import '../css/App.css'
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { VitaliaContext } from '../contexts/vitaliaContext';


export default function BasicDatePicker() {

  const {fecha, setFecha, horario, setHorario, doctorElegido, setHorarioElegido} = useContext(VitaliaContext)
  const [horariosDisponibles, setHorariosDisponibles] = useState([])

    useEffect(() => {
    axios.get(`http://localhost:8080/horarios?doctorId=${doctorElegido.id}`)
      .then((data) => {
        console.log("horarios", data.data) 
        setHorariosDisponibles(data.data)
      })
      .catch((error) => {
        console.log("Error!:", error)
      })
  }, [doctorElegido]);

  const mostrarHorarios = fecha ? horariosDisponibles : []

  const navigate = useNavigate()

  const handleClickHorario = async (horario) => {
    //acá le cambia el estado al horario
    try {
      await axios.put(`http://localhost:8080/horarios/${horario.id}`, {
        ...horario, ocupado: true
      });

      setHorario(horario);
      setHorarioElegido(horario);

      //acá actualiza la lista d los horarios
      const res = await axios.get(`http://localhost:8080/horarios?doctorId=${doctorElegido.id}`);
      setHorariosDisponibles(res.data);

      navigate('/paciente');
    } catch (error) {
      console.error('Detalles del error:', error.response?.data || error.message);
      alert('No se pudo reservar el horario. Por favor, intentá de nuevo.');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} sx={{
        borderTop: '1px solid white',
        margin: '0.5em'
      }}>
        <DatePicker
          disablePast
          label="Elegí una fecha"
          value={fecha}
          onChange={(newValue) => setFecha(newValue)}
          sx={{
            color: 'black',
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '& .MuiInputLabel-root': { color: 'white' },
            '& .MuiInputBase-input': { color: 'white' },
            '& .MuiSvgIcon-root': { color: 'white' },
          }}
        />
        <Box sx={{
          marginTop: '1.5em',
          width: '100%',
          maxWidth: '300px',
          padding: '1em',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}>
          {/* <Typography variant="h6" gutterBottom sx={{color: 'white'}}> CONSULTAR!!!!!
            Horarios disponibles para {selectedDate ? selectedDate.format('DD/MM/YYYY') : 'la fecha seleccionada'}
          </Typography> */}

          {mostrarHorarios.length > 0 ? (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {mostrarHorarios.map((horario, index) => (
                <Button className='hora-button'
                  key={index}
                  variant="contained"
                  onClick={() => handleClickHorario(horario)}
                  disabled={horario.ocupado}
                  sx={{
                    backgroundColor: '#00C3A5',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    padding: '8px 15px',
                    '&:hover': {
                      backgroundColor: '#00A88D',
                    },
                    '&.Mui-disabled': {
                      backgroundColor: '#009881',
                      color: '#ffffff',
                      opacity: 0.6,
                      cursor: 'not-allowed',
    }
                  }}
                >
                  {horario.hora}
                </Button>
              ))}
            </Box>
          ) : (
            <Typography variant="body1" color="white">
              Por favor, selecciona una fecha para ver los horarios.
            </Typography>
          )}
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  );
}
