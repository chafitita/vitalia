import React, { useState } from 'react';
import { Grid, Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import DoctorCard from './DoctorCard';

import '../css/DoctorList.css'

const doctores = [
  { nombre: 'Mateo Levrino', clinica: 'Clínica Amarilla', consultorio:'A3' },
  { nombre: 'Maria Romera', clinica: 'Clínica Azul' , consultorio:'C2'},
  { nombre: 'Santiago Cezar', clinica: 'Clínica Roja' , consultorio:'B2'},
  { nombre: 'Samir David Arab', clinica: 'Clínica Azul', consultorio:'C3'}
];

export default function DoctorList() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {doctores.map((doctor, index) => (
          <DoctorCard
            key={index}
            doctor={doctor}
            onClick={() => setSelectedDoctor(doctor)}
          />
        ))}
      </Grid>

      <Dialog open={Boolean(selectedDoctor)} onClose={() => setSelectedDoctor(null)}>
        <DialogTitle sx={{color: '#32736A'}}>{selectedDoctor?.nombre}</DialogTitle>
        <DialogContent>
          <Typography sx={{color: '#32736A'}}>
            Clínica: {selectedDoctor?.clinica}
          </Typography>
          <Typography sx={{color: '#32736A'}}>
            Consultorio: {selectedDoctor?.consultorio}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
