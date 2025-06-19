import * as React from 'react';
import { useContext, useState } from 'react';
import { VitaliaContext } from '../contexts/vitaliaContext';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import '../css/Select.css'

export default function BasicSelect() {
  const {especialidad, setEspecialidad} = useContext(VitaliaContext)
  const {especialidadElegida, setEspecialidadElegida} = useContext(VitaliaContext)
  
  const handleChange = (event) => {
    const nombre = event.target.value
    const seleccion = especialidad.find(e => e.nombre === nombre)
    setEspecialidadElegida(seleccion)
  }

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200,
        width: 200,
        borderRadius: '10px',
      },
    },
  };

  return (
    <Box sx={{
      backgroundColor: '#00C3A5',
      borderTop: 1,
      padding: 3,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <FormControl sx={{
        m: 0,
        width: '40rem',
      }}>
        <InputLabel
          id="basic-select-label"
          sx={{
            color: 'black', 
            fontWeight: 'bold', 
            position: 'relative', 
            transform: 'none',
            top: 'auto',
            left: 'auto',
            marginBottom: '8px',
            '&.Mui-focused': {
              color: 'white', 
            },
            '&.MuiFormLabel-shrink': { 
              transform: 'none', 
              marginBottom: '8px',
            },
          }}
        >
        </InputLabel>

        <Select
          labelId="basic-select-label"
          id="basic-select"
          value={especialidadElegida?.nombre || ''}
          label="Especialidad" 
          onChange={handleChange}
          MenuProps={MenuProps}
          sx={{
            '& .MuiSelect-select': { 
              padding: '10px 15px', 
              borderRadius: '30px', 
              backgroundColor: '#e0e0e0', 
              color: '#008E78', 
              fontWeight: 'bold', 
              border: 'none', 
              display: 'flex', 
              alignItems: 'center',
              alignSelf: 'center'
            },
            '& .MuiOutlinedInput-notchedOutline': { 
              border: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
              borderRadius: '30px',
            },
            '& .MuiSvgIcon-root': {
              color: '#333',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none !important', 
            },
            '&:hover .MuiSelect-select': {
              backgroundColor: '#d0d0d0',
            },
          }}
        >
          {especialidad.map((esp) => (
            <MenuItem
              key={esp.id}
              value={esp.nombre}
              sx={{
                backgroundColor: 'white', 
                color: '#333',
                borderRadius: '30px',
                padding: '10px 15px', 
                margin: '0px 0px', 
                display: 'flex', 
                justifyContent: 'center', 
                '&.Mui-selected': { 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  fontWeight: 'bold',
                },
                '&:hover': { 
                  backgroundColor: '#f0f0f0', 
                },
              }}
            >
              {esp.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}