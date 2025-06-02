import { Button, Container, Typography, Grid, TextField, Paper, Divider, List, ListItem, ListItemText, Box, CircularProgress, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useContext, useEffect } from "react";
import { SurveyContext } from "../ContextStore/ContextProvider/SurveyProvider";
import { useLocation, useNavigate } from "react-router";
import { StepperContext } from "../ContextStore/ContextProvider/StepperProvider";
import { SURVEY_ACTIONS } from "../ContextStore/Reducers/SurveyReducer";
import { UserContext } from "../ContextStore/ContextProvider/UserProvider";
import LoginComponent from "~/LoginPage/LoginComponent";
import { orderContext } from "../ContextStore/ContextProvider/OrderHistoryProvider";
import { ORDER_HISTORY_ACTIONS } from "../ContextStore/Reducers/OrderHistoryReducer";

const Bestellung = () => {
    const { surveyData, dispatch } = useContext(SurveyContext);
    const { user } = useContext(UserContext);
    const { orderDispatch } = useContext(orderContext);
    const [loading, setLoading] = useState(false);
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    const [postLoginLoader, setPostLoginLoader] = useState(false);

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
                type: "SET_ACTIVE_STEP",
                payload: { step: matchingStep.step }
            });
        }
    }, [location.pathname, stepperData, stepperDispatch]);

    // Watch for login in dialog
    useEffect(() => {
        if (user?.isLoggedIn && loginDialogOpen) {
            setPostLoginLoader(true);
            setTimeout(() => {
                setPostLoginLoader(false);
                setLoginDialogOpen(false);
            }, 1200);
        }
    }, [user?.isLoggedIn, loginDialogOpen]);

    const handleOrder = () => {
        setLoading(true);

        // Generate unique order number
        const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

        // Prepare order data
        const orderData = {
            orderNumber,
            orderStatus: "in progress", // could also be "in progress" or "canceled"
            createdAt: new Date().toISOString(),
            details: { ...surveyData },
        };

        // Add order to history
        orderDispatch({
            type: ORDER_HISTORY_ACTIONS.ADD_ORDER,
            payload: orderData,
        });

        setTimeout(() => {
            // Find the current step index
            const currentStepIndex = stepperData.findIndex(step => step.url === location.pathname);
            // Mark Bestellung as checked
            stepperDispatch({
                type: "CHECK_STEP",
                payload: { step: currentStepIndex },
            });

            // Clear survey state

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
                                        primary="Backset:"
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
                            <>
                                {user?.isLoggedIn ? (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={handleOrder}
                                    >
                                        Jetzt bestellen
                                    </Button>
                                ) : (
                                    <Box display="flex" flexDirection="column" gap={2}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            onClick={handleOrder}
                                        >
                                            Als Gast bestellen
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            fullWidth
                                            onClick={() => setLoginDialogOpen(true)}
                                        >
                                            Jetzt bestellen und Konto anlegen
                                        </Button>
                                    </Box>
                                )}
                            </>
                        )}
                        {/* Login/Register Dialog */}
                        <Dialog open={loginDialogOpen} onClose={() => setLoginDialogOpen(false)} maxWidth="xs" fullWidth>
                            <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                Login oder Registrieren
                                <IconButton onClick={() => setLoginDialogOpen(false)} size="small">
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent>
                                {postLoginLoader ? (
                                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" py={4}>
                                        <CircularProgress />
                                        <Typography mt={2}>Erfolgreich eingeloggt! Einen Moment...</Typography>
                                    </Box>
                                ) : (
                                    <LoginComponent
                                        hideRedirect
                                        initialRegister={{
                                            email: surveyData.contact?.email || "",
                                            firstName: surveyData.address?.vorname || "",
                                            lastName: surveyData.address?.nachname || "",
                                        }}
                                        initialLogin={{
                                            email: surveyData.contact?.email || "",
                                        }}
                                    />
                                )}
                            </DialogContent>
                        </Dialog>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Bestellung;