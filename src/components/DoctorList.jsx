import React, { useState, useContext } from 'react';
import { Grid, Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material';
import DoctorCard from './DoctorCard';

import { VitaliaContext } from '../contexts/vitaliaContext';

import '../css/DoctorList.css'

const doctores = [
  { nombre: 'Mateo Levrino', clinica: 'Clínica Amarilla', consultorio:'A3' },
  { nombre: 'Maria Romera', clinica: 'Clínica Azul' , consultorio:'C2'},
  { nombre: 'Santiago Cezar', clinica: 'Clínica Roja' , consultorio:'B2'},
  { nombre: 'Samir David Arab', clinica: 'Clínica Azul', consultorio:'C3'},
];

export default function DoctorList() {
  const {doctor, setDoctor} = useContext(VitaliaContext)

  const [dialogDoctor, setDialogDoctor] = useState(null)

  const handleCardClick = (doc) => {
    setDialogDoctor(doc)
  }

  const handleDialogClose = () => {
    setDialogDoctor(null)
  }

  const handleConfirmSelection = () => {
    if (dialogDoctor) {
      setDoctor(dialogDoctor)
      setDialogDoctor(null)
      alert(`Doctor ${dialogDoctor.nombre} seleccionado para el turno!`);
    }
  }

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {doctores.map((doc, index) => (
          <DoctorCard
            key={index}
            doctor={doc}
            onClick={() => handleCardClick(doc)}
          />
        ))}
      </Grid>

      <Dialog open={Boolean(dialogDoctor)} onClose={handleDialogClose}>
        <DialogTitle sx={{color: '#32736A'}}>{dialogDoctor?.nombre}</DialogTitle>
        <DialogContent>
          <Typography sx={{color: '#32736A'}}>
            Clínica: {dialogDoctor?.clinica}
          </Typography>
          <Typography sx={{color: '#32736A'}}>
            Consultorio: {dialogDoctor?.consultorio}
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: '15px' }}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#00C3A5',
                  '&:hover': { backgroundColor: '#00A88D' }
                }}
                onClick={handleConfirmSelection}
                fullWidth
              >
                Confirmar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#00C3A5',
                  color: '#00C3A5',
                  '&:hover': { backgroundColor: '#e0f7fa' }
                }}
                onClick={handleDialogClose}
                fullWidth
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
