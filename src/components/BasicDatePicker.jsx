import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Typography, Button } from '@mui/material';
import dayjs from 'dayjs';

import '../css/BasicDatePicker.css';
import '../css/App.css';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { VitaliaContext } from '../contexts/vitaliaContext';

export default function BasicDatePicker() {
  const { fecha, setFecha, setHorario, doctorElegido, setHorarioElegido } = useContext(VitaliaContext);
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);

  const navigate = useNavigate();

  // ✅ Esta función se dispara al elegir una fecha
  const handleFechaChange = async (newValue) => {
    setFecha(newValue);
    const fechaFormateada = dayjs(newValue).format('YYYY-MM-DD');
    try {
      const res = await axios.get(
        `http://localhost:8080/horarios/disponibles?doctorId=${doctorElegido.id}&fecha=${fechaFormateada}`
      );
      setHorariosDisponibles(res.data);
    } catch (error) { //EXPLICARLE A GEMINI QUE FUNCIONA 
    // A MEDIAS, QUE BORRA TODAS LAS FECHAS DEL DÍA EN LUGAR DE SOLO LA 
    //QUE COINCIDE Y DARLE EJEMPLO COMO HACE EL USER
      console.error("Error al cargar horarios disponibles:", error);
    }
  };

  // ✅ Cuando el usuario hace clic en un horario
  const handleClickHorario = (horario) => {
    setHorario(horario);
    setHorarioElegido(horario);
    navigate('/paciente');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} sx={{ borderTop: '1px solid white', margin: '0.5em' }}>
        <DatePicker
          disablePast
          label="Elegí una fecha"
          value={fecha}
          onChange={handleFechaChange}
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

        <Box
          sx={{
            marginTop: '1.5em',
            width: '100%',
            maxWidth: '300px',
            padding: '1em',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
          autoComplete="off"
        >
          {horariosDisponibles.length > 0 ? (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {horariosDisponibles.map((horario, index) => (
                <Button
                  className="hora-button"
                  key={index}
                  variant="contained"
                  onClick={() => handleClickHorario(horario)}
                  sx={{
                    backgroundColor: '#00C3A5',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    padding: '8px 15px',
                    '&:hover': { backgroundColor: '#00A88D' },
                    '&.Mui-disabled': {
                      backgroundColor: '#009881',
                      color: '#ffffff',
                      opacity: 0.6,
                      cursor: 'not-allowed',
                    },
                  }}
                >
                  {horario.hora}
                </Button>
              ))}
            </Box>
          ) : (
            <Typography variant="body1" color="white">
              Por favor, seleccioná una fecha para ver los horarios.
            </Typography>
          )}
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  );
}
