import React, { useState, useContext, useEffect } from 'react';
import { Grid, Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material';
import DoctorCard from './DoctorCard';
import axios from 'axios';

import { VitaliaContext } from '../contexts/vitaliaContext';

import '../css/DoctorList.css'

export default function DoctorList() {

  const [doctoresFiltrados, setDoctoresFiltrados] = useState([])
  const { especialidadElegida } = useContext(VitaliaContext);
  const { doctorElegido, setDoctorElegido } = useContext(VitaliaContext);

  useEffect(() => {
    if (especialidadElegida && especialidadElegida.id) {
      axios.get(`http://localhost:8080/doctores?especialidadId=${especialidadElegida.id}`)
        .then((res) => {
          setDoctoresFiltrados(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [especialidadElegida]);

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
      setDoctorElegido(dialogDoctor)
      setDialogDoctor(null)
    }
  }

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {doctoresFiltrados.map((doc, index) => (
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
