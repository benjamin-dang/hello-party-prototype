import { Box, Button, Container, Typography } from "@mui/material";
import ContentWithSlider from "./Components/ContentWithSlider";

import CustomButton from "../Components/CustomButton";
import ContentWithGalery from "./Components/ContentWithGalery";

const CoverText = {
    heading: 'Welcome to Our Website',
    subheading: 'Some Text',
    subtext1: 'Nachhaltige Inhalte & Verpackungen',
    subtext2: 'Das Perfekte Geschenk für jeden Anlass',
    buttonText: 'Eventboxen ansehen',
}
const HomeComponent = () => {
    return (
        <>
            <Box sx={
                {
                    height: '640px',
                    width: '100%',
                    backgroundImage: 'url(CoverPicture.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                }
            }
                component={'div'}
            >
                <Container sx={
                    {
                        position: 'absolute',
                        top: '45%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }
                }>
                    <Typography variant="h2" fontWeight={'bold'} mb={0} pb={0}>
                        {CoverText.heading}
                    </Typography>
                    <Typography variant="h2" fontWeight={'bold'} mt={0} sx={{ paddingTop: '-10px' }} gutterBottom>
                        {CoverText.subheading}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {CoverText.subtext1}
                    </Typography>
                    <Typography variant="h5" mb={5} gutterBottom>
                        {CoverText.subtext2}
                    </Typography>
                    <CustomButton>
                        {CoverText.buttonText}
                    </CustomButton>
                </Container>

            </Box>
            <Container maxWidth={'lg'}>
                <ContentWithSlider />
            </Container>
            <Container maxWidth={'lg'}>
                <ContentWithGalery/>
            </Container>
        </>
    )
}

export default HomeComponent;