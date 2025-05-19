import { Container, IconButton, Typography, Grid, Box, Card, CardContent, CardMedia, CardActionArea } from "@mui/material"
import CustomButton from "../../Components/CustomButton"

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRef, useEffect } from "react";



const defaultContent = {
    heading: 'Deine Box, für deinen Anlass personalisiert',
    subheading: 'Passnder Inhalt für jedes Event, damit du immer die richtige Wahl triffst',
}

const defaultGalaryCardContent1 = {
    // img: '/decorating.png',
    img: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' : '/decorating.png',    heading: 'Dekor und Zubehör',
    text: 'Pefekt für Geburtstage',
}


const defaultGalaryCardContent2 = {
    // img: '/decorating.png',
    img: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' : '/event-box.png',    heading: 'Dekor und Zubehör',
    text: 'Pefekt für Geburtstage',
}


const defaultGalaryCardContent3 = {
    // img: '/decorating.png',
    img: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' : '/event-box2.png',    heading: 'Dekor und Zubehör',
    text: 'Pefekt für Geburtstage',
}


const defaultGalaryCardContent4 = {
    // img: '/decorating.png',
    img: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' : '/event-box3.png',    heading: 'Dekor und Zubehör',
    text: 'Pefekt für Geburtstage',
}


const defaultGalaryCardContent5 = {
    // img: '/decorating.png',
    img: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' : '/event-box4.png',    heading: 'Dekor und Zubehör',
    text: 'Pefekt für Geburtstage',
}


const defaultGalaryCardContent6 = {
    // img: '/decorating.png',
    img: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' : '/event-box2.png',    heading: 'Dekor und Zubehör',
    text: 'Pefekt für Geburtstage',
}

const defaultGalaryArray = [
    defaultGalaryCardContent1,
    defaultGalaryCardContent2,
    defaultGalaryCardContent3,
    defaultGalaryCardContent4,
    defaultGalaryCardContent5,
    defaultGalaryCardContent6,
    defaultGalaryCardContent1,
    defaultGalaryCardContent2,

]

const GalaryCard = ({ cardContent = defaultGalaryCardContent1 }) => {
    return (
        <Card sx={{
            position: 'relative',
            alignSelf: 'center',
            justifySelf: 'center',
        }}>
            <CardMedia
                component={'img'}
                image={cardContent.img}
                alt={cardContent.heading}
                sx={{
                    objectFit: 'cover',
                    width: 262,
                    height: 315,
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    textAlign: 'left',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
                    pb: 3,
                    pl: 2,
                }}>
                <Typography gutterBottom variant="h6" component="div" fontWeight={'bold'} mb={0} color="white">
                    {cardContent.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={0} sx={{ color: 'white' }} fontWeight={'bold'} fontSize={'16px'} >
                    {cardContent.text}
                </Typography>
            </Box>

        </Card>
    )
}

const Galary = ({ galaryArray = defaultGalaryArray }) => {

    let scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 262;
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 262;
        }
    };

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 262; // Set initial scroll position
        }
    }, []);

    return (
        <Grid container direction={'row'} flexWrap={'nowrap'} justifyItems={'center'} alignItems={'center'}>
            <Grid size={0.5} mb={6} >
                <IconButton
                    onClick={scrollLeft}
                    sx={{
                        backgroundColor: 'white',
                        border: '1px solid black',
                        borderRadius: '50%',
                        width: 48,
                        height: 48,
                    }}
                >
                    <ArrowBackIcon />
                </IconButton>
            </Grid>
            <Grid size={11}
                container
                direction="row"
                wrap="nowrap"
                sx={{
                    overflowX: 'hidden',
                    gap: 2,
                    mb: 6,
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    '&::-webkit-scrollbar': { display: 'none' },
                    mx: 2,
                }}
                ref={scrollContainerRef}
            >

                {galaryArray.map((cardContent, index) => (
                    <Grid
                        key={index}
                        sx={{
                            flex: '0 0 auto',
                            scrollSnapAlign: 'center',
                        }}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <GalaryCard cardContent={cardContent} />
                    </Grid>
                ))}

            </Grid>
            <Grid size={0.5} mb={6}>
                <IconButton
                    onClick={scrollRight}
                    sx={{
                        backgroundColor: 'white',
                        border: '1px solid black',
                        borderRadius: '50%',
                        width: 48,
                        height: 48,
                    }}
                >
                    < ArrowForwardIcon />
                </IconButton>
            </Grid>
        </Grid >
    );
};

const ContentWithGalery = ({ content = defaultContent }) => {
    return (
        <>
            <Container sx={{ textAlign: 'center', mt: 18, mb: 10 }}>
                <Typography variant="h4" fontWeight={'bold'} mb={0} pb={0}>
                    {content.heading}
                </Typography>
                <Typography fontSize={'16px'} mt={3} mb={3}>
                    {content.subheading}
                </Typography>
                <Galary />
                <CustomButton>
                    Menü ansehen
                </CustomButton>
            </Container>
        </>
    )
}

export default ContentWithGalery