import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react'; 
import { VitaliaContext } from '../contexts/vitaliaContext';
import { Button, Typography, CircularProgress } from '@mui/material'; 
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function PacientData() {

  const { setPacienteid, nombre, setNombre, apellido, setApellido, dni, setDni, email, setEmail } = useContext(VitaliaContext);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' o 'error'

  // Func para manejar cambios genéricos en los inputs
  const handleChange = (event) => {
    const { name, value } = event.target;

    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

    switch (name) {
      case 'nombre':
        setNombre(value);
        break;
      case 'apellido':
        setApellido(value);
        break;
      case 'dni':
        setDni(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  // Validación del front
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!nombre.trim()) {
      tempErrors.nombre = 'El nombre es requerido.';
      isValid = false;
    }
    if (!apellido.trim()) {
      tempErrors.apellido = 'El apellido es requerido.';
      isValid = false;
    }
    if (!dni.trim()) {
      tempErrors.dni = 'El DNI es requerido.';
      isValid = false;
    } else if (!/^\d+$/.test(dni.trim())) {
      tempErrors.dni = 'El DNI debe contener solo números.';
      isValid = false;
    } else if (dni.trim().length < 7 || dni.trim().length > 10) {
      tempErrors.dni = 'El DNI debe tener entre 7 y 10 dígitos.';
      isValid = false;
    }
    if (!email.trim()) {
      tempErrors.email = 'El E-mail es requerido.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.trim())) {
      tempErrors.email = 'Formato de E-mail inválido.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };
  
  const navigate = useNavigate()
  // Envío del form al back
  const handleSubmit = async () => {
    setMessage('');
    setMessageType('');

    if (validateForm()) {
      navigate('/confirmación')
    }

    if (!validateForm()) {
      setMessage('Por favor, corrige los errores en el formulario.');
      setMessageType('error');
      return;
    }

    setIsLoading(true);

    try {
    const res = await axios.post('http://localhost:8080/pacientes', {
      nombre,
      apellido,
      dni,
      email
    });
      const paciente = res.data.paciente;
        setPacienteid(paciente.id); 
        setNombre(paciente.nombre);
        setApellido(paciente.apellido);
        setDni(paciente.dni);
        setEmail(paciente.email);

  setMessage(res.data.mensaje);

      setMessage('Paciente creado exitosamente.');
      setMessageType('success');

    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Errores de validación del back c/express-validator
        const backendErrors = error.response.data.errores;
        const newErrors = {};
        backendErrors.forEach(err => {
          newErrors[err.param] = err.msg;
        });
        setErrors(newErrors);
        setMessage('Ocurrieron errores al crear el paciente.');
        setMessageType('error');
      } else {
        setMessage('Error inesperado al conectarse con el servidor.');
        setMessageType('error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '30px',
        textAlign: 'center',
        width: '25vw',
        minWidth: '300px',
        padding: '20px'
      }}
      noValidate
      autoComplete="off"
      onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} // evitar recarga de página al hacer submit
    >
      <TextField
        value={nombre}
        onChange={handleChange}
        id="nombre-field"
        name="nombre"
        label="Nombre"
        variant="standard"
        error={!!errors.nombre}
        helperText={errors.nombre}
      />
      <TextField
        value={apellido}
        onChange={handleChange}
        id="apellido-field"
        name="apellido"
        label="Apellido"
        variant="standard"
        error={!!errors.apellido}
        helperText={errors.apellido}
      />
      <TextField
        value={dni}
        onChange={handleChange}
        id="dni-field"
        name="dni"
        label="DNI"
        variant="standard"
        type="number"
        error={!!errors.dni}
        helperText={errors.dni}
      />
      <TextField
        value={email}
        onChange={handleChange}
        id="email-field"
        name="email"
        label="E-mail"
        variant="standard"
        type="email"
        error={!!errors.email}
        helperText={errors.email}
      />

      {message && (
        <Typography
          sx={{
            mt: 2,
            textAlign: 'center',
            color: messageType === 'error' ? 'red' : 'green',
          }}
        >
          {message}
        </Typography>
      )}

      <Button className='confirm-patient-button'
        variant="contained"
        sx={{
          backgroundColor: '#00C3A5',
          '&:hover': { backgroundColor: '#00A88D' },
          mt: 3,
          height: '48px',
        }}
        type="submit"
        disabled={isLoading}
        fullWidth
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Confirmar'}
      </Button>
    </Box>
  );
}