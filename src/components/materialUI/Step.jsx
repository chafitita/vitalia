// Step.jsx
import React from 'react';

const Step = ({ stepNumber, label, isActive, isCompleted, onClick }) => {
  const stepCircleStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: isCompleted || isActive ? '#fff' : '#888',
    backgroundColor: isCompleted || isActive ? '#2e8b57' : '#f0f0f0',
    border: isCompleted || isActive ? 'none' : '2px solid #ccc',
    transition: 'background-color 0.3s ease, border 0.3s ease',
    cursor: 'pointer', // Añade un cursor de puntero para indicar que es clicable
    userSelect: 'none', // Evita la selección de texto al hacer clic
  };

  const stepLabelStyle = {
    marginTop: '5px',
    fontSize: '14px',
    color: '#333',
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      onClick={() => onClick(stepNumber)} // Llama a la función onClick pasando el número del paso
    >
      <div style={stepCircleStyle}>{stepNumber}</div>
      {label && <div style={stepLabelStyle}>{label}</div>}
    </div>
  );
};

export default Step;