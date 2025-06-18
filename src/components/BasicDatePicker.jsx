import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Typography, Button } from '@mui/material';
import dayjs from 'dayjs';

import '../css/BasicDatePicker.css'

import '../css/App.css'
import { useState } from 'react';

export default function BasicDatePicker() {

  const [selectedDate, setSelectedDate] = useState(null)

  const allAvailableHours=[
    '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', 
  ]

  const displayHours = selectedDate ? allAvailableHours : []

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} sx={{
        borderTop: '1px solid white',
        margin: '0.5em'
      }}>
        <DatePicker
          label="Elegí una fecha"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
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

          {displayHours.length > 0 ? (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {displayHours.map((hour, index) => (
                <Button
                  key={index}
                  variant="contained"
                  sx={{
                    backgroundColor: '#00C3A5',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    padding: '8px 15px',
                    '&:hover': {
                      backgroundColor: '#00A88D',
                    },
                  }}
                >
                  {hour}
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
