import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Easily adjustable FAQ data
const faqData = [
    {
        question: "Wie funktioniert die Bestellung einer Event Box?",
        answer: "Wähle deine gewünschte Event Box aus, passe sie nach deinen Wünschen an und schließe die Bestellung bequem online ab. Wir kümmern uns um den Rest!"
    },
    {
        question: "Kann ich auch als Gast bestellen?",
        answer: "Ja, du kannst als Gast bestellen oder ein Konto anlegen, um deine Bestellungen und den Status jederzeit einzusehen."
    },
    {
        question: "Wie lange dauert die Lieferung?",
        answer: "Die Lieferung erfolgt in der Regel innerhalb von 2-4 Werktagen nach Bestelleingang. Den genauen Status findest du in deinem Kundenkonto."
    },
    {
        question: "Welche Zahlungsmöglichkeiten gibt es?",
        answer: "Wir akzeptieren verschiedene Zahlungsmethoden wie Kreditkarte, PayPal und weitere. Alle Optionen werden dir im Bestellprozess angezeigt."
    },
    {
        question: "Kann ich meine Bestellung stornieren?",
        answer: "Solange deine Bestellung noch nicht versendet wurde, kannst du sie im Kundenkonto oder über unseren Support stornieren."
    },
    // Füge hier weitere Fragen & Antworten hinzu!
];

const questionBg = "#FFF8EC"; // zarter, freundlicher Hintergrund für Fragen

const FAQComponent = () => {
    return (
        <Box sx={{ bgcolor: "#FBF1E1", py: 6, minHeight: "80vh" }}>
            <Container maxWidth="md">
                <Paper elevation={0} sx={{ borderRadius: 4, p: { xs: 2, sm: 4 }, bgcolor: "white", mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold" color="black" gutterBottom align="center">
                        Häufig gestellte Fragen (FAQ)
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" align="center" mb={2}>
                        Hier findest du Antworten auf die wichtigsten Fragen rund um unsere Event Boxen und den Bestellprozess.
                    </Typography>
                    {faqData.map((faq, idx) => (
                        <Accordion
                            key={idx}
                            sx={{
                                mb: 2,
                                borderRadius: 2,
                                boxShadow: "none",
                                border: "none",
                                bgcolor: "white",
                                overflow: "hidden",
                                p: 0,
                                '&:before': { display: 'none' },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ fontSize: 32 }} />}
                                aria-controls={`faq-content-${idx}`}
                                id={`faq-header-${idx}`}
                                sx={{
                                    fontWeight: 700,
                                    color: "black",
                                    fontSize: { xs: "1.0rem", sm: "1.15rem", md: "1.25rem" },
                                    px: 3,
                                    py: 2,
                                    borderRadius: 2,
                                    bgcolor: questionBg,
                                    minHeight: 0,
                                    transition: "background 0.2s",
                                    '&.Mui-expanded': {
                                        bgcolor: questionBg,
                                    },
                                }}
                            >
                                {faq.question}
                            </AccordionSummary>
                            <AccordionDetails sx={{ bgcolor: "white", borderRadius: 2, px: 3, py: 2 }}>
                                <Typography color="text.secondary" fontSize="1.05rem">{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Paper>
            </Container>
        </Box>
    );
};

export default FAQComponent;