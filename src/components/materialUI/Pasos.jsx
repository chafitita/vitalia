// App.jsx
import React, { useState } from 'react';
import Stepper from './Stepper';

function App() {
  const [currentStep, setCurrentStep] = useState(2);

  const handleNext = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, 4));
  };

  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
  };

  // Nueva función para manejar el clic en un paso
  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  const stepLabels = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4'];

  return (
    <div>
      <Stepper
        currentStep={currentStep}
        totalSteps={4}
        stepLabels={stepLabels}
        onStepClick={handleStepClick} // Pasa la nueva función al Stepper
      />
      {/* <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handlePrev} disabled={currentStep === 1}>Anterior</button>
        <button onClick={handleNext} disabled={currentStep === 4}>Siguiente</button>
      </div> */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Contenido del Paso {currentStep}</h2>
        {/* Aquí puedes renderizar el contenido específico de cada paso */}
        {currentStep === 1 && <p>Este es el contenido del Paso 1.</p>}
        {currentStep === 2 && <p>Este es el contenido del Paso 2. ¡Ahora puedes hacer clic!</p>}
        {currentStep === 3 && <p>Este es el contenido del Paso 3.</p>}
        {currentStep === 4 && <p>Este es el contenido del Paso 4.</p>}
      </div>
    </div>
  );
}

export default App;