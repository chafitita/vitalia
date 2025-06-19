import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react'; // Importar useState para errores de validación y carga
import { VitaliaContext } from '../contexts/vitaliaContext';
import { Button, CircularProgress, Typography } from '@mui/material'; // Importar componentes para feedback

export default function PacientData() {
  // Desestructurar del contexto, asumiendo que los setters tienen los nombres correctos
  const { nombre, setNombre, apellido, setApellido, dni, setDni, email, setEmail } = useContext(VitaliaContext);

  // Estados locales para manejar errores de validación y estado de carga/mensaje
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' o 'error'

  // **Función genérica para manejar los cambios en cualquier TextField**
  // Se usa el atributo 'name' del TextField para identificar qué estado actualizar
  const handleChange = (event) => {
    const { name, value } = event.target; // Obtiene el 'name' y el 'value' del input que cambió

    // Limpia el error del campo cuando el usuario empieza a escribir de nuevo
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

    // Actualiza el estado correspondiente usando el 'name' del input
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
    // console.log(`${name}: ${value}`); // Para depuración
  };

  // Función de validación de formulario
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
    } else if (dni.trim().length < 7 || dni.trim().length > 10) { // Ejemplo de longitud para DNI
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

    setErrors(tempErrors); // Actualiza el estado de errores
    return isValid;
  };

  // Función de envío del formulario
  const handleSubmit = () => {
    setMessage(''); // Limpiar mensajes anteriores
    setMessageType('');

    if (!validateForm()) {
      setMessage('Por favor, corrige los errores en el formulario.');
      setMessageType('error');
      return; // Detiene el envío si la validación falla
    }

    setIsLoading(true); // Activa el estado de carga
    console.log('Intentando enviar datos:', { nombre, apellido, dni, email });
  }

  return (
    <Box
      component="form"
      // Corrección en la sintaxis del objeto sx
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '30px',
        textAlign: 'center',
        width: '25vw',
        minWidth: '300px', // Añadido para mejor responsividad
        padding: '20px' // Añadido para que el contenido no se pegue al borde
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={nombre}
        onChange={handleChange} // Usamos la función genérica
        id="nombre-field" // ID único
        name="nombre" // IMPORTANTE: Define el 'name'
        label="Nombre"
        variant="standard"
      />
      <TextField
        value={apellido}
        onChange={handleChange} // Usamos la función genérica
        id="apellido-field" // ID único
        name="apellido" // IMPORTANTE: Define el 'name'
        label="Apellido"
        variant="standard"
      />
      <TextField
        value={dni}
        onChange={handleChange} // Usamos la función genérica
        id="dni-field" // ID único
        name="dni" // IMPORTANTE: Define el 'name'
        label="DNI"
        variant="standard"
        type="number" // Sugerencia para teclado numérico
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Para mejor compatibilidad y accesibilidad
      />
      <TextField
        value={email}
        onChange={handleChange} // Usamos la función genérica
        id="email-field" // ID único
        name="email" // IMPORTANTE: Define el 'name'
        label="E-mail"
        variant="standard"
        type="email" // Sugerencia para formato de email
      />

      {/* Mensajes de feedback para el usuario */}
      {message && (
        <Typography
          sx={{
            mt: 2,
            textAlign: 'center'
          }}
        >
          {message}
        </Typography>
      )}

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#00C3A5',
          '&:hover': { backgroundColor: '#00A88D' },
          mt: 3, // Margen superior para separar del último TextField
          height: '48px', // Altura fija para el spinner
        }}
        onClick={handleSubmit}
        fullWidth
      >
         Confirmar
      </Button>
    </Box>
  );
}