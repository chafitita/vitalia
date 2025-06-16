import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { useNavigate, useLocation, Outlet } from 'react-router';

const steps = [
  {label: "Paso 1", path: "/pasos/especialidad"},
  {label: "Paso 2", path: "/pasos/doctor"},
]

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(()=>{
    const currentIndex = steps.findIndex(step => step.path === location.pathname);
    if (currentIndex !== -1) setActiveStep(currentIndex);
    else if (location.pathname === "/pasos") navigate(steps[0].path);
  }, [location.pathname, navigate]);


  const handleNext = () => {
    if(activeStep < steps.length - 1){
      navigate(steps[activeStep + 1].path)
    }
  };

  const handleBack = () => {
    if(activeStep > 0){
      navigate(steps[activeStep - 1].path)
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ 
        display: 'flex',
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
        <React.Fragment>

          <Box>
            <Outlet />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2}}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, color: 'white'}}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} sx={{color: 'white'}}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
    </Box>
  );
}
