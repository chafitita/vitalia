import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles'; // Importamos useTheme para los estilos de MenuItem

import '../css/Select.css'

export default function BasicSelect() {
  const theme = useTheme(); // Obtenemos el tema para usarlo en los estilos
  const [specialty, setSpecialty] = React.useState(''); // Cambiado a 'specialty' para mayor claridad

  const handleChange = (event) => {
    setSpecialty(event.target.value);
  };
  
  //PEDIDO A LA BD DE ESPECIALIDADES

  const specialtyNames = [ // Renombramos 'names' a 'specialtyNames' para mayor claridad
    'Alergeología',
    'Cardiología',
    'Clínica médica',
    'Dermatología',
    'Endocrinología',
    'Oncología',
    'Odontología',
    'Traumatología',
    'Osteología',
    'Gastroenterología',
  ];

  // Puedes definir MenuProps si necesitas controlar el menú desplegable,
  // pero para este estilo, quizás no sea estrictamente necesario.
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200, // Ejemplo: altura máxima del menú
        width: 200,    // Ancho del menú
        borderRadius: '10px', // Bordes redondeados para el Paper del menú
      },
    },
  };

  return (
    // Contenedor principal con el fondo verde azulado
    <Box sx={{
      backgroundColor: '#00C3A5', // El verde azulado de tu imagen
      borderTop: 1,
      padding: 3, // Mayor padding para el contenedor
      display: 'inline-flex', // Para que el fondo se ajuste al contenido
      alignItems: 'center', // Centra verticalmente el contenido
      justifyContent: 'center' // Centra horizontalmente el contenido
    }}>
      <FormControl sx={{
        m: 0, // Sin margen adicional
        width: '40rem', // Ancho fijo para el select
      }}>
        {/* Etiqueta del Select */}
        <InputLabel
          id="basic-select-label"
          sx={{
            color: 'black', // Texto blanco
            fontWeight: 'bold', // Negrita
            position: 'relative', // Para posicionar libremente
            transform: 'none', // Resetear la transformación predeterminada de Material-UI
            top: 'auto', // Resetear top
            left: 'auto', // Resetear left
            marginBottom: '8px', // Espacio entre el label y el select
            '&.Mui-focused': {
              color: 'white', // Mantener blanco al enfocar
            },
            '&.MuiFormLabel-shrink': { // Estilo cuando el label se "encoge" (cuando hay valor)
              transform: 'none', // Evitar que se mueva al seleccionar
              marginBottom: '8px', // Mantener margen
            },
          }}
        >
          {/* Especialidad */}
        </InputLabel>

        {/* El componente Select */}
        <Select
          labelId="basic-select-label"
          id="basic-select"
          value={specialty}
          label="Especialidad" // Necesario si usas InputLabel
          onChange={handleChange}
          MenuProps={MenuProps} // Aplicamos los props del menú
          sx={{
            '& .MuiSelect-select': { // Estilo del área visible del select
              padding: '10px 15px', // Relleno para que parezca una pill
              borderRadius: '30px', // Bordes redondeados
              backgroundColor: '#e0e0e0', // Fondo gris claro de la pill
              color: '#008E78', // Color del texto
              fontWeight: 'bold', // Texto negrita
              border: 'none', // Sin borde por defecto
              display: 'flex', // Para alinear el texto si es necesario
              alignItems: 'center',
              alignSelf: 'center'
            },
            '& .MuiOutlinedInput-notchedOutline': { // Eliminar el borde del OutlinedInput
              border: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { // Asegurarse de que no aparezca el borde al enfocar
              border: 'none',
              borderRadius: '30px',
            },
            '& .MuiSvgIcon-root': { // Estilo del icono de la flecha
              color: '#333', // Color de la flecha
            },
            // Estilo al pasar el ratón (hover)
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none !important', // Asegurarse de que no aparezca el borde al pasar el ratón
            },
            '&:hover .MuiSelect-select': {
              backgroundColor: '#d0d0d0', // Un gris un poco más oscuro al pasar el ratón
            },
          }}
        >
          {specialtyNames.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{
                backgroundColor: 'white', // Fondo gris claro para los items del menú
                color: '#333', // Color del texto oscuro
                borderRadius: '30px', // Bordes redondeados para cada item
                padding: '10px 15px', // Relleno para que parezcan pills
                margin: '0px 0px', // Margen entre las pills en el menú
                display: 'flex', // Para que el texto se centre bien
                justifyContent: 'center', // Centrar horizontalmente
                '&.Mui-selected': { // Estilo para el item seleccionado
                  backgroundColor: '#007bff', // Un color azul para indicar selección
                  color: 'white', // Texto blanco
                  fontWeight: 'bold',
                },
                '&:hover': { // Estilo al pasar el ratón por los items
                  backgroundColor: '#f0f0f0', // Un gris más claro
                },
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}