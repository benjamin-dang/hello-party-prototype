import CallToActionBanner from "./Components/CallToActionBanner";

import { NavLink, Outlet } from "react-router";
import Disclaimer from "../Components/Disclaimer";
import { Container } from "@mui/material";
import CustomButton from "~/Components/CustomButton";

import { useContext } from "react";
import { StepperContext } from "~/ContextStore/ContextProvider/StepperProvider";
import { STEPPER_ACTIONS } from "~/ContextStore/Reducers/StepperReducer";



const OrderComponent = () => {
    const { stepperData, dispatch } = useContext(StepperContext);

    const currentStepData = stepperData.filter((step) => step.active)[0];

    let nextStepUrl = currentStepData.url;

    if (currentStepData.step + 1 >= stepperData.length) {
        console.log('No next step available');
    } else {
        nextStepUrl = stepperData[currentStepData.step + 1].url;
    }

    return (
        <>
            <Outlet />
            <Container maxWidth='sm' sx={{ display: 'flex' }}>
                <NavLink style={{ width: '100%' }} to={nextStepUrl}>
                    <CustomButton sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'black',
                            border: '1px solid black',
                            padding: '11px 23px',
                        }
                    }} fullWidth
                        onClick={() => (
                            dispatch({
                                type: STEPPER_ACTIONS.COMPLETE_STEP,
                                payload: {
                                    currentStepData: stepperData.filter((step) => step.active)
                                },
                            })
                        )}
                    >
                        Auswählen
                    </CustomButton>
                </NavLink>
            </Container>
            <Disclaimer />
            <CallToActionBanner />
        </>
    )
}

export default OrderComponent;

