import { Box, Button, Container, Typography } from "@mui/material";
import ContentWithSlider from "./Components/ContentWithSlider";

import { useEffect, useState } from "react";

import CustomButton from "../Components/CustomButton";
import ContentWithGalery from "./Components/ContentWithGalery";
import ContentWithInstaPosts from "./Components/ContentWithInstaPosts";
import CallToActionBanner from "./Components/CallToActionBanner";
import { NavLink } from "react-router";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const CoverText = {
    heading: 'Willkommen bei HelloParty',
    subheading: '', // Wird dynamisch getypt
    subtext1: 'Nachhaltige Eventboxen & Verpackungen',
    subtext2: 'Das perfekte Geschenk für jeden Anlass',
    buttonText: 'Eventbox bestellen',
}



const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const DELAY_AFTER_WORD = 1200;

const SNACKBAR_KEY = "showLoginSuccessSnackbar";

const HomeComponent = () => {
    const [dynamicText, setDynamicText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const dynamicTextArray = [
        'Eventboxen für jeden Anlass',
        'Individuell & nachhaltig verpackt',
        'Einfach online bestellen',
        'Jetzt entdecken!',
    ];

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const currentWord = dynamicTextArray[currentIndex];

        if (!isDeleting && dynamicText.length < currentWord.length) {
            timeout = setTimeout(() => {
                setDynamicText(currentWord.slice(0, dynamicText.length + 1));
            }, TYPING_SPEED);
        } else if (!isDeleting && dynamicText.length === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), DELAY_AFTER_WORD);
        } else if (isDeleting && dynamicText.length > 0) {
            timeout = setTimeout(() => {
                setDynamicText(currentWord.slice(0, dynamicText.length - 1));
            }, DELETING_SPEED);
        } else if (isDeleting && dynamicText.length === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % dynamicTextArray.length);
            }, 400);
        }
        return () => clearTimeout(timeout);
    }, [dynamicText, isDeleting, currentIndex]);

    useEffect(() => {
        if (window.localStorage.getItem(SNACKBAR_KEY) === "true") {
            setSnackbarOpen(true);
            window.localStorage.removeItem(SNACKBAR_KEY);
        }
    }, []);

    return (
        <>
            <Box sx={{
                height: '640px',
                width: '100%',
                backgroundImage: 'url(CoverPicture.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
            }}>
                <Container sx={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}>
                    <Typography variant="h2" fontWeight={'bold'} mb={0} pb={0}>
                        {CoverText.heading}
                    </Typography>
                    <Typography
                        variant="h2"
                        fontWeight={'bold'}
                        mt={0}
                        sx={{ minHeight: '2.5em', mb: -5 }} // mb: 1 sorgt für weniger Abstand nach unten
                    >
                        {dynamicText}
                        <span style={{ borderRight: '2px solid #1976d2', marginLeft: 2, animation: 'blink 1s steps(1) infinite' }} />
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ mt: 0 }}>
                        {CoverText.subtext1}
                    </Typography>
                    <Typography variant="h5" mb={5} gutterBottom>
                        {CoverText.subtext2}
                    </Typography>
                    <NavLink to={'/order/infos-zum-event'}>
                        <CustomButton>
                            {CoverText.buttonText}
                        </CustomButton>
                    </NavLink>
                </Container>
            </Box>
            <Container maxWidth={'lg'}>
                <ContentWithSlider />
            </Container>
            <Container maxWidth={'lg'}>
                <ContentWithGalery />
            </Container>
            <ContentWithInstaPosts />
            <CallToActionBanner />
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3500}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <MuiAlert onClose={() => setSnackbarOpen(false)} severity="success" elevation={6} variant="filled">
                    Benutzer erfolgreich angemeldet oder registriert.
                </MuiAlert>
            </Snackbar>
            <style>
                {`
                @keyframes blink {
                    0% { opacity: 1; }
                    50% { opacity: 0; }
                    100% { opacity: 1; }
                }
                `}
            </style>
        </>
    )
}

export default HomeComponent;