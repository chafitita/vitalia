// Stepper.jsx
import React from 'react';
import Step from './Step';

const Stepper = ({ currentStep, totalSteps, stepLabels, onStepClick }) => {
  return (
    <div style={stepperContainerStyle}>
      {[...Array(totalSteps)].map((_, index) => (
        <React.Fragment key={index}>
          <Step
            stepNumber={index + 1}
            label={stepLabels ? stepLabels[index] : null}
            isActive={index + 1 === currentStep}
            isCompleted={index + 1 < currentStep}
            onClick={onStepClick} // Pasa la función onStepClick al componente Step
          />
          {index < totalSteps - 1 && (
            <div
              style={{
                ...lineStyle,
                backgroundColor: index + 1 < currentStep ? '#2e8b57' : '#ccc',
              }}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const stepperContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '20px',
  backgroundColor: '#1abc9c',
};

const lineStyle = {
  height: '4px',
  width: '50px',
  margin: '0 5px',
};

export default Stepper;