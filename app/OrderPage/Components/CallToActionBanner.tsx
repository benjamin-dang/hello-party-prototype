import { Container, Typography, Grid, Box } from "@mui/material";

import CustomButton from "../../Components/CustomButton";

const defaultActionData = {
    heading: "Event Boxen",
    text: 'Iss ausgewogen, spare Zeit und hab die perfekte Lösung für einen entspannten Alltag.',
    buttonText: 'Event Boxen ansehen',
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
                <Typography variant="h4" fontWeight={'bold'} my={5}>
                    {actionData.heading}
                </Typography>
                <Typography variant="h6" my={3} sx={{
                    textAlign: 'center',
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