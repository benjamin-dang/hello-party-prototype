import { Button, Container, Typography, Grid, TextField, Paper, Divider, List, ListItem, ListItemText, Box } from "@mui/material";
import { useState, useContext } from "react";
import { SurveyContext } from "../ContextStore/ContextProvider/SurveyProvider";

const Bestellung = () => {
    // States für die Eingabefelder
    const [address, setAddress] = useState({
        vorname: "",
        nachname: "",
        strasse: "",
        plz: "",
        stadt: ""
    });
    const [contact, setContact] = useState({
        email: "",
        telefon: ""
    });

    // Survey-Daten aus Context holen
    const { surveyData } = useContext(SurveyContext);

    // Auswahl aus surveyData aufbereiten
    const selectedEvent = surveyData.eventOptions?.find(opt => opt.selected)?.label || "-";
    const amountOfPeople = surveyData.amountOfPeople || "-";
    const selectedBackery = surveyData.additionalBackery?.filter(opt => opt.selected) || [];
    const showBackBox = surveyData.eventBoxWithCake?.find(opt => opt.label === "Ja")?.selected;
    const additionalInfo = surveyData.eventAdditionalInfo || "-";
    const eventLocation = surveyData.eventLocation?.find(opt => opt.selected)?.label || "-";

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
                            value={address.vorname}
                            onChange={e => setAddress({ ...address, vorname: e.target.value })}
                        />
                        <TextField
                            label="Nachname"
                            fullWidth
                            margin="normal"
                            value={address.nachname}
                            onChange={e => setAddress({ ...address, nachname: e.target.value })}
                        />
                        <TextField
                            label="Straße & Hausnummer"
                            fullWidth
                            margin="normal"
                            value={address.strasse}
                            onChange={e => setAddress({ ...address, strasse: e.target.value })}
                        />
                        <TextField
                            label="PLZ"
                            fullWidth
                            margin="normal"
                            value={address.plz}
                            onChange={e => setAddress({ ...address, plz: e.target.value })}
                        />
                        <TextField
                            label="Stadt"
                            fullWidth
                            margin="normal"
                            value={address.stadt}
                            onChange={e => setAddress({ ...address, stadt: e.target.value })}
                        />
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                label="E-Mail"
                                fullWidth
                                margin="normal"
                                value={contact.email}
                                onChange={e => setContact({ ...contact, email: e.target.value })}
                            />
                            <TextField
                                label="Telefonnummer (optional)"
                                fullWidth
                                margin="normal"
                                value={contact.telefon}
                                onChange={e => setContact({ ...contact, telefon: e.target.value })}
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
                        <Button variant="contained" color="primary" fullWidth>
                            Jetzt bestellen
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Bestellung;