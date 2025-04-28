import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";

import CustomButton from '../../Components/CustomButton'
const defaultContent = {
    heading: 'Die weltweit einzigartigste Eventbox',
    subheading: 'Personalisiert nur für dich und deinen Anlass',
}

const defaultCardContent =
{
    heading: 'Event Boxen',
    text: 'Für jeden Anlass die passende Box, die du ganz einfach online bestellen kannst.',
    imgSrc: 'https://images.unsplash.com/photo-1625552187571-7ee60ac43d2b?q=80&w=1819&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: 'Event Boxen',
    icon: '/gift.png',
    iconAlt: 'Event Boxen Icon',
}

const defaultCardArray = [
    defaultCardContent,
    defaultCardContent,
    defaultCardContent,
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