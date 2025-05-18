import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import CallToActionBanner from "./Components/CallToActionBanner";
import CustomStepper from "../Components/CustomStepper";
import { SelectionPart, SelectionButton, SelectionButtonGrid } from "./Components/SelectionPart";
import { PersonSelection, PersonLeftColumn, PersonRightColumn, PersonSelectionRow, PersonSelectionButtonGrid } from "./Components/PersonSelection";

import { Outlet } from "react-router";
import Disclaimer from "../Components/Disclaimer";

import { useState, useEffect } from "react";
import { useContext } from "react";
import { SurveyContext } from "../ContextStore/ContextProvider/SurveyProvider";
import { NavLink, useLocation } from "react-router";
import CustomButton from "../Components/CustomButton";
import { StepperContext } from "../ContextStore/ContextProvider/StepperProvider";
import { STEPPER_ACTIONS } from "../ContextStore/Reducers/StepperReducer";

const InfosZumEvent = () => {
    const { surveyData, dispatch } = useContext(SurveyContext);
    const { stepperData, dispatch: stepperDispatch } = useContext(StepperContext);
    const location = useLocation();
    const currentStepData = stepperData.find(step => step.active);
    const nextStepUrl = stepperData[currentStepData.step + 1]?.url || "/order/deine-box"; // fallback

    useEffect(() => {
        // Find the step that matches the current route
        const matchingStep = stepperData.find(step => step.url === location.pathname);
        if (matchingStep && !matchingStep.active) {
            stepperDispatch({
                type: STEPPER_ACTIONS.SET_ACTIVE_STEP,
                payload: { step: matchingStep.step }
            });
        }
    }, [location.pathname, stepperData, stepperDispatch]);

    const generalOnClick = (option) => {
        if (option.type === 'event-option') {
            dispatch({
                type: 'SET_EVENT_TYPE',
                payload: { clickedOption: option },
            });
        }
        if (option.type === 'people-option') {
            dispatch({
                type: 'SET_AMOUNT_OF_PEOPLE',
                payload: { clickedOption: option },
            });
        }
        if (option.type === 'location-option') {
            dispatch({
                type: 'SET_EVENT_LOCATION',
                payload: { clickedOption: option },
            });
        }
    }
    return (
        <>
            <SelectionPart sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', my: 4 }}>
                <Typography variant="h5" fontWeight={'bold'} gutterBottom>
                    Was für ein Event wird Veranstaltet?
                </Typography>
                <Typography variant="body2" fontSize={'16px'} mt={2}>
                    Bitte wähle <strong>eine</strong> der folgenden Optionen aus, um fortzufahren.
                </Typography>
                <Container maxWidth={'md'}>
                    <SelectionButtonGrid>
                        {surveyData.eventOptions.map((option, index) => (
                            <SelectionButton key={index} option={option} onClick={{ handleClick: generalOnClick }} />
                        ))}
                    </SelectionButtonGrid>
                </Container>
                <Typography variant="body2" fontSize={'16px'}>
                    Perfekt ausgerüstet für <strong>dein</strong> Event.
                </Typography>
            </SelectionPart>
            <PersonSelection sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', my: 4 }}>
                <Typography variant="h5" fontWeight={'bold'} gutterBottom>
                    Wie groß ist dein Event?
                </Typography>
                <Typography variant="body2" fontSize={'16px'} textAlign={'center'} my={2} gutterBottom>
                    Diese angabe ist wichtig, damit wir dir die richtige Box zusammenstellen können.
                </Typography>

                <PersonSelectionRow>
                    <PersonLeftColumn>
                        <Typography variant="body2" fontSize={'16px'} fontWeight={'bold'} textAlign={'center'}>
                            Anzahl der Personen
                        </Typography>

                    </PersonLeftColumn> {/* <PersonRightColumn options={surveyData.amountOfPeople} onClick={{ handleClick: generalOnClick }} /> */}
                    <Grid direction={'column'} size={7} >
                        <TextField
                            onChange={(e) => {
                                dispatch({
                                    type: 'SET_AMOUNT_OF_PEOPLE',
                                    payload: { clickedOption: e.target.value },
                                });
                            }}
                            fullWidth
                            id="outlined-number"
                            label="Anzahl der Personen"
                            type="number"
                            defaultValue={surveyData.amountOfPeople}
                            slotProps={{

                            }}
                        />
                    </Grid>

                </PersonSelectionRow>

                <PersonSelectionRow>
                    <PersonLeftColumn>
                        <Typography variant="body2" fontSize={'16px'} fontWeight={'bold'} textAlign={'center'}>
                            Veranstaltungs Ort
                        </Typography>
                    </PersonLeftColumn>
                    <PersonRightColumn options={surveyData.eventLocation} onClick={{ handleClick: generalOnClick }} />
                </PersonSelectionRow>
            </PersonSelection >
            <Container maxWidth='sm' sx={{ display: 'flex', mt: 4 }}>
                <NavLink style={{ width: '100%' }} to={nextStepUrl}>
                    <CustomButton
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: 'black',
                                border: '1px solid black',
                                padding: '11px 23px',
                            }
                        }}
                        fullWidth
                        onClick={() => stepperDispatch({
                            type: STEPPER_ACTIONS.COMPLETE_STEP,
                            payload: { currentStepData: stepperData.filter((step) => step.active) },
                        })}
                    >
                        Auswählen
                    </CustomButton>
                </NavLink>
            </Container>
        </>
    );
}

export default InfosZumEvent;