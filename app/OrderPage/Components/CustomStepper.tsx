import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const defaultStepData = [
  {
    step: 0,
    icon: <CelebrationIcon />,
    label: 'Infos zum Event',
    checked: false,
    active: true,
  },

  {
    step: 1,
    icon: <CardGiftcardIcon />,
    label: 'Deine Box',
    checked: false,
    active: false,
  },

  {
    step: 2,
    icon: <LocalShippingIcon />,
    label: 'Bestellung',
    checked: false,
    active: false,
  }
]

// Custom Step Icon Component
function CustomStepIcon({ active, completed }) {


  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: completed ? 'green' : active ? 'lightblue' : 'gray',
        color: 'white',
      }}
    >
      {completed ? (
        <CheckCircleIcon fontSize="small" />
      ) : active ? (
        <CelebrationIcon fontSize="small" />
      ) : (
        <RadioButtonUncheckedIcon fontSize="small" />
      )}
    </Box>
  );
}

function CustomStepper({ stepDataArray = defaultStepData}) {

  return (
    <Box sx={{
      width: '100%',
    }}>
      <Stepper activeStep={0} >
        {stepDataArray.map((stepData, index) => (
          <Step key={stepData.label} completed={stepData.checked} active={stepData.active}>
            <StepLabel

            >
              {stepData.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default CustomStepper;