import { Container, Card, CardContent, Typography, Grid, Divider, List, ListItem, ListItemText, Box } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import { useContext, useEffect } from "react";
import { SurveyContext } from "~/ContextStore/ContextProvider/SurveyProvider";

const SuccessFullOrder = () => {
    const { surveyData, dispatch } = useContext(SurveyContext);

    const selectedEvent = surveyData.eventOptions?.find(opt => opt.selected)?.label || "-";
    const amountOfPeople = surveyData.amountOfPeople || "-";
    const selectedBackery = surveyData.additionalBackery?.filter(opt => opt.selected) || [];
    const showBackBox = surveyData.eventBoxWithCake?.find(opt => opt.label === "Ja")?.selected;
    const additionalInfo = surveyData.eventAdditionalInfo || "-";
    const eventLocation = surveyData.eventLocation?.find(opt => opt.selected)?.label || "-";

    useEffect(() => {

    }, [])

    return (
        <Container maxWidth="md" sx={{ mt: 1, mb: 4 }}>
            <Card elevation={3} sx={{ borderRadius: 3 }}>
                <CardContent>
                    <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60, mb: 1 }} />
                        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                            Vielen Dank für Ihre Bestellung!
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" align="center">
                            Ihre Bestellung wurde erfolgreich aufgegeben.<br />
                            Ihren Bestellstatus können Sie jederzeit in Ihrem Profil einsehen.
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h5" fontWeight="bold" >
                        Bestelldetails
                    </Typography>
                    <Grid container spacing={2} justifyContent={"center"} >
                        <Grid size={{ md: 6, sm: 6, xs: 12 }} >
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemText
                                        primary="Vorname"
                                        secondary={surveyData.address?.vorname || "-"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Nachname"
                                        secondary={surveyData.address?.nachname || "-"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Straße"
                                        secondary={surveyData.address?.strasse || "-"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="PLZ"
                                        secondary={surveyData.address?.plz || "-"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Stadt"
                                        secondary={surveyData.address?.stadt || "-"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Email"
                                        secondary={surveyData.contact?.email || "-"}
                                    />
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid size={{ md: 6, sm: 6, xs: 12 }} >
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemText
                                        primary="Event Box für"
                                        secondary={selectedEvent || "-"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Anzahl der Personen"
                                        secondary={amountOfPeople || "-"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Veranstaltungsort"
                                        secondary={eventLocation || "-"}
                                    />
                                </ListItem>
                                {selectedBackery.length > 0 && (
                                    <ListItem>
                                        <ListItemText
                                            primary="Back Box"
                                            secondary={selectedBackery.map(b => b.label).join(", ")}
                                        />
                                    </ListItem>
                                )}
                                <ListItem>
                                    <ListItemText
                                        primary="Zusätzliche Infos"
                                        secondary={additionalInfo || "-"}
                                    />
                                </ListItem>
                            </List>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default SuccessFullOrder;