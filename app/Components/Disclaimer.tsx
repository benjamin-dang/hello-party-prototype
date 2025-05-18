import { Box, Container, Typography } from "@mui/material";


const disclaimerText = {
    text: '*Bis zu attraktiven Vorteilen auf ausgewählte HelloParty Event Boxen für neue Kundinnen und Kunden im flexiblen Modell (inkl. besonderer Vorteile bei der ersten Bestellung; weitere Konditionen können variieren). Als Neukundinnen und Neukunden gelten alle, die sich erstmalig bei HelloParty registrieren oder deren frühere Nutzung ausreichend zurückliegt. Die genauen Vorteile richten sich nach individuellen Auswahlkriterien und werden im Bestellprozess angezeigt. Die maximale Ersparnis bezieht sich auf ausgewählte Event Boxen und kann abhängig von Umfang und Auswahl der Box abweichen. Die Einlösung ist innerhalb eines definierten Zeitraums ab Aktivierung möglich. Keine Barauszahlung, nicht mit anderen Aktionen kombinierbar, nur einmal pro Person und Haushalt gültig. Wöchentlich flexibel gestaltbar. Änderungen vorbehalten. Hinweis: Bei diesem Text handelt es sich um ein rein fiktives Beispiel im Rahmen einer Demo-Seite. Es besteht kein tatsächliches Angebot.'
}

const Disclaimer = () => {
    return (
        <Box
            width={'100%'}
            p={2}
        >
            <Container maxWidth="lg" sx={{
                justifyItems: 'center',
                alignItems: 'center',
            }}>
                <Typography variant="body2" fontSize={'14px'} my={3} sx={{
                }}>
                    {disclaimerText.text}
                </Typography>

            </Container>
        </Box>
    );
}
export default Disclaimer;