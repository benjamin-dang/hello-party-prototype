import { Button, Container, Typography, Grid, TextField, Paper, Divider, List, ListItem, ListItemText, Box, CircularProgress } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { SurveyContext } from "../ContextStore/ContextProvider/SurveyProvider";
import { useLocation, useNavigate } from "react-router";
import { StepperContext } from "../ContextStore/ContextProvider/StepperProvider";
import { STEPPER_ACTIONS } from "../ContextStore/Reducers/StepperReducer";
import { SURVEY_ACTIONS } from "../ContextStore/Reducers/SurveyReducer";

const Bestellung = () => {
    const { surveyData, dispatch } = useContext(SurveyContext);
    const [loading, setLoading] = useState(false);

    // Auswahl aus surveyData aufbereiten
    const selectedEvent = surveyData.eventOptions?.find(opt => opt.selected)?.label || "-";
    const amountOfPeople = surveyData.amountOfPeople || "-";
    const selectedBackery = surveyData.additionalBackery?.filter(opt => opt.selected) || [];
    const showBackBox = surveyData.eventBoxWithCake?.find(opt => opt.label === "Ja")?.selected;
    const additionalInfo = surveyData.eventAdditionalInfo || "-";
    const eventLocation = surveyData.eventLocation?.find(opt => opt.selected)?.label || "-";

    const location = useLocation();
    const navigate = useNavigate();
    const { stepperData, dispatch: stepperDispatch } = useContext(StepperContext);

    useEffect(() => {
        const matchingStep = stepperData.find(step => step.url === location.pathname);
        if (matchingStep && !matchingStep.active) {
            stepperDispatch({
                type: STEPPER_ACTIONS.SET_ACTIVE_STEP,
                payload: { step: matchingStep.step }
            });
        }
    }, [location.pathname, stepperData, stepperDispatch]);

    const handleOrder = () => {
        setLoading(true);
        setTimeout(() => {
            // Find the current step index
            const currentStepIndex = stepperData.findIndex(step => step.url === location.pathname);
            // Mark Bestellung as checked
            stepperDispatch({
                type: STEPPER_ACTIONS.CHECK_STEP,
                payload: { step: currentStepIndex },
            });
            setLoading(false);
            navigate("/order/success");
        }, 3000);
    };

    return (
        <Container maxWidth="xl" sx={{ my: 1, xs: 12 }}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom align="center" sx={{ mb: 2 }}>
                Bestellübersicht & Addressdaten
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {/* Linke Seite: Lieferadresse */}
                <Grid size={{ md: 6 }}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Lieferadresse
                        </Typography>
                        <TextField
                            label="Vorname"
                            fullWidth
                            margin="normal"
                            value={surveyData.address?.vorname || ""}
                            onChange={e => dispatch({
                                type: SURVEY_ACTIONS.SET_ADDRESS,
                                payload: { vorname: e.target.value }
                            })}
                        />
                        <TextField
                            label="Nachname"
                            fullWidth
                            margin="normal"
                            value={surveyData.address?.nachname || ""}
                            onChange={e => dispatch({
                                type: SURVEY_ACTIONS.SET_ADDRESS,
                                payload: { nachname: e.target.value }
                            })}
                        />
                        <TextField
                            label="Straße & Hausnummer"
                            fullWidth
                            margin="normal"
                            value={surveyData.address?.strasse || ""}
                            onChange={e => dispatch({
                                type: SURVEY_ACTIONS.SET_ADDRESS,
                                payload: { strasse: e.target.value }
                            })}
                        />
                        <TextField
                            label="PLZ"
                            fullWidth
                            margin="normal"
                            value={surveyData.address?.plz || ""}
                            onChange={e => dispatch({
                                type: SURVEY_ACTIONS.SET_ADDRESS,
                                payload: { plz: e.target.value }
                            })}
                        />
                        <TextField
                            label="Stadt"
                            fullWidth
                            margin="normal"
                            value={surveyData.address?.stadt || ""}
                            onChange={e => dispatch({
                                type: SURVEY_ACTIONS.SET_ADDRESS,
                                payload: { stadt: e.target.value }
                            })}
                        />
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                label="E-Mail"
                                fullWidth
                                margin="normal"
                                value={surveyData.contact?.email || ""}
                                onChange={e => dispatch({
                                    type: SURVEY_ACTIONS.SET_CONTACT,
                                    payload: { email: e.target.value }
                                })}
                            />
                            <TextField
                                label="Telefonnummer (optional)"
                                fullWidth
                                margin="normal"
                                value={surveyData.contact?.telefon || ""}
                                onChange={e => dispatch({
                                    type: SURVEY_ACTIONS.SET_CONTACT,
                                    payload: { telefon: e.target.value }
                                })}
                            />
                        </Box>
                    </Paper>
                </Grid>
                {/* Rechte Seite: Deine Auswahl + Kontakt + Button */}
                <Grid size={{ md: 4, xs: 12 }}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Deine Auswahl
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <ListItemText primary="Event Box für:" secondary={selectedEvent} />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText primary="Anzahl der Personen:" secondary={amountOfPeople} />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText primary="Veranstaltungsort:" secondary={eventLocation} />
                            </ListItem>
                            {showBackBox && (
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary="Back Box:"
                                        secondary={
                                            selectedBackery.length > 0
                                                ? selectedBackery.map(b => b.label).join(", ")
                                                : "Keine ausgewählt"
                                        }
                                    />
                                </ListItem>
                            )}
                            <ListItem disablePadding>
                                <ListItemText primary="Anmerkungen: " secondary={additionalInfo} />
                            </ListItem>
                        </List>
                        <Divider sx={{ my: 2 }} />
                        {loading ? (
                            <Box display="flex" justifyContent="center" alignItems="center" minHeight={56}>
                                <CircularProgress />
                            </Box>
                        ) : (
                            <Button variant="contained" color="primary" fullWidth onClick={handleOrder}>
                                Jetzt bestellen
                            </Button>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Bestellung;