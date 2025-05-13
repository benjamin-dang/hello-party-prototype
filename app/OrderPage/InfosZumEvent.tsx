import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import CallToActionBanner from "./Components/CallToActionBanner";
import CustomStepper from "../Components/CustomStepper";
import { SelectionPart, SelectionButton, SelectionButtonGrid } from "./Components/SelectionPart";
import { PersonSelection, PersonLeftColumn, PersonRightColumn, PersonSelectionRow, PersonSelectionButtonGrid } from "./Components/PersonSelection";

import { Outlet } from "react-router";
import Disclaimer from "../Components/Disclaimer";

import { useState } from "react";
import { useContext } from "react";
import { SurveyContext } from "../ContextStore/ContextProvider/SurveyProvider";

const InfosZumEvent = () => {
    const { surveyData, dispatch } = useContext(SurveyContext);

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
                            label="Number"
                            type="number"
                            defaultValue={surveyData.amountOfPeople}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />                    </Grid>

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
        </>
    );
}

export default InfosZumEvent;