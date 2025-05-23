import { Container, Typography, Grid, Box } from "@mui/material";

import CustomButton from "../../Components/CustomButton";

const defaultActionData = {
    heading: "Event Boxen",
    text: 'Entdecke unsere liebevoll zusammengestellten Eventboxen für jeden Anlass. Einfach bestellen, auspacken und gemeinsam feiern – mit HelloParty wird jedes Event zum Highlight!',
    buttonText: 'Event Boxen bestellen',
}

const CallToActionBanner = ({ actionData = defaultActionData }) => {
    return (
        <Box
            bgcolor={'#FBF1E1'}
            width={'100%'}
            p={2}
        >
            <Container maxWidth="sm" sx={{
                justifyItems: 'center',
                alignItems: 'center',
                textAlign: 'center',

            }}>
                <Typography variant="h4" fontWeight={'bold'} my={5} sx={{
                }}>
                    {actionData.heading}
                </Typography>
                <Typography variant="h6" my={3} sx={{
                }}>
                    {actionData.text}
                </Typography>
                <CustomButton sx={{
                    mt: 2,
                    mb: 5,
                }}>
                    {actionData.buttonText}
                </CustomButton>
            </Container>
        </Box>
    )
}

export default CallToActionBanner;