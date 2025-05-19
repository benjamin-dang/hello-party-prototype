import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";

import CustomButton from '../../Components/CustomButton'
const defaultContent = {
    heading: 'Die weltweit einzigartigste Eventbox',
    subheading: 'Personalisiert nur für dich und deinen Anlass',
}

const defaultCardContent =
{
    heading: 'Für jeden Anlass',
    text: 'Nicht nur Geburtstag – finde die perfekte Eventbox für dein Event.',
    imgSrc: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' :
        '/box-open2.png',
    imgAlt: 'Event Boxen',
    icon: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/gift.png' : '/gift.png',
    iconAlt: 'Event Boxen Icon',
}

const defaultCardContent2 =
{
    heading: 'Alles drin, was du brauchst',
    text: 'Von Dekoration bis Zubehör – unsere Boxen sind komplett ausgestattet und sofort einsatzbereit.',
    imgSrc: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' :
        '/box-open3.png',
    imgAlt: 'Event Boxen',
    icon: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/gift.png' : '/gift.png',
    iconAlt: 'Event Boxen Icon',
}

const defaultCardContent3 =
{
    heading: 'Schnell & nachhaltig geliefert',
    text: 'Bestelle bequem online und erhalte deine Eventbox schnell und umweltfreundlich nach Hause.',
    imgSrc: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' :
        '/box-open4.png',
    imgAlt: 'Event Boxen',
    icon: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/gift.png' : '/gift.png',
    iconAlt: 'Event Boxen Icon',
}

const defaultCardArray = [
    defaultCardContent,
    defaultCardContent2,
    defaultCardContent3,
]

const SliderCard = ({ cardContent = defaultCardContent, size = 4 }) => {
    return (
        <Grid size={size} mt={4}>
            <Card elevation={0}  >
                <Box position={'relative'}>
                    <CardMedia
                        component="img"
                        sx={{
                            maxHeight: '300px',
                            minHeight: '200px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        image={cardContent.imgSrc}
                        alt={cardContent.imgAlt}
                    />
                    <Box
                        component={'img'}
                        src={cardContent.icon}
                        alt={cardContent.iconAlt}
                        sx={{
                            width: '100px',
                            position: 'absolute',
                            bottom: '50%',
                            left: '50%',
                            transform: 'translate(-50%, 50%)',
                        }}
                    />
                </Box>
                <CardContent sx={{ textAlign: 'left', backgroundColor: 'transparent' }}>
                    <Typography gutterBottom variant="h6" component="div" fontWeight={'bold'} mb={0}>
                        {cardContent.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={0} sx={{ color: 'inherit' }}>
                        {cardContent.text}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

const Slider = ({ CardArray = defaultCardArray }) => {
    return (
        <Grid container spacing={5} mb={4}>
            {
                CardArray.map((cardContent, index) => (
                    <SliderCard key={index} cardContent={cardContent} />
                ))
            }
        </Grid >
    )
}

const ContentWithSlider = ({ content = defaultContent }) => {
    return (
        <>
            <Container sx={{ textAlign: 'center', mt: 8, mb: 8 }}>
                <Typography variant="h4" fontWeight={'bold'} mb={0} pb={0}>
                    {content.heading}
                </Typography>
                <Typography fontSize={'16px'} mt={3} mb={3}>
                    {content.subheading}
                </Typography>
                <Slider />
                <CustomButton>
                    Mehr erfahren
                </CustomButton>
                <Typography variant="body2" mt={3} mb={3} fontSize={'16px'}>
                    schnelle Lieferung, 100% <strong>Zufriedenheitsgarantie</strong>
                </Typography>
            </Container>
        </>
    )
}

export default ContentWithSlider;