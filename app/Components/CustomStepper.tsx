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

import { useContext } from "react";
import { StepperContext } from "~/ContextStore/ContextProvider/StepperProvider";
import { STEPPER_ACTIONS } from "~/ContextStore/Reducers/StepperReducer";


const CustomStepper = () => {
  const { stepperData } = useContext(StepperContext);

  if (!Array.isArray(stepperData)) {
    console.error('stepDataArray is not an array:', stepperData);
    return null;
  }

  return (
    <Box sx={{
      width: '100%',
    }}>
      <Stepper activeStep={0} >
        {stepperData.map((stepData, index) => (
          <Step key={index} completed={stepData.checked} active={stepData.active}>
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