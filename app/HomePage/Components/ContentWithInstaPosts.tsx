import { Container, IconButton, Typography, Grid, Box, Card, CardContent, CardMedia, CardActionArea } from "@mui/material"
import CustomButton from "../../Components/CustomButton"

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useRef, useState } from "react";



const defaultContent = {
    heading: 'Deine Eventbox – individuell für dein Event',
    subheading: 'Wähle aus verschiedenen Themenboxen und finde die perfekte Box für jeden Anlass. Mit HelloParty wird jedes Event besonders!',
}

const defaultGalaryCardContent = {
    img: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' : '/dinoparty-box-kindergeburtstag.jpg',
    heading: 'Dekor & Zubehör',
    text: '„Die HelloParty Eventbox hat unser Fest wirklich besonders gemacht! Alles war liebevoll zusammengestellt, die Dekoration war wunderschön und es hat an nichts gefehlt. Wir würden jederzeit wieder bestellen – absolute Empfehlung!“',
    profileImg: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/profile-placeholder.png' : '/profile-placeholder.png',
}

const defaultGalaryCardContent2 = {
    img: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' : '/box-silvester.jpg',
    heading: 'Dekor & Zubehör',
    text: '„Die HelloParty Eventbox hat unser Fest wirklich besonders gemacht! Alles war liebevoll zusammengestellt, die Dekoration war wunderschön und es hat an nichts gefehlt. Wir würden jederzeit wieder bestellen – absolute Empfehlung!“',
    profileImg: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/profile-placeholder.png' : '/profile-placeholder.png',
}

const defaultGalaryCardContent3 = {
    img: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' : '/deko-box-with-cupcakes.webp',
    heading: 'Dekor & Zubehör',
    text: '„Die HelloParty Eventbox hat unser Fest wirklich besonders gemacht! Alles war liebevoll zusammengestellt, die Dekoration war wunderschön und es hat an nichts gefehlt. Wir würden jederzeit wieder bestellen – absolute Empfehlung!“',
    profileImg: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/profile-placeholder.png' : '/profile-placeholder.png',
}

const defaultGalaryCardContent4 = {
    img: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' : '/box-gender-reveal.webp',
    heading: 'Dekor & Zubehör',
    text: '„Die HelloParty Eventbox hat unser Fest wirklich besonders gemacht! Alles war liebevoll zusammengestellt, die Dekoration war wunderschön und es hat an nichts gefehlt. Wir würden jederzeit wieder bestellen – absolute Empfehlung!“',
    profileImg: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/profile-placeholder.png' : '/profile-placeholder.png',
}


const defaultGalaryArray = [
    defaultGalaryCardContent,
    defaultGalaryCardContent2,
    defaultGalaryCardContent3,
    defaultGalaryCardContent4,
    defaultGalaryCardContent2,
    defaultGalaryCardContent3,
    defaultGalaryCardContent4,
    defaultGalaryCardContent,

]

const GalaryCard = ({ cardContent = defaultGalaryCardContent, activeIndex, currentIndex }) => {

    const isActive = activeIndex === currentIndex;

    const activeIndexStyle = {
        cardOpacity: 1,
        textOpacity: 1,
    };

    const inactiveIndexStyle = {
        cardOpacity: 0.5,
        textOpacity: 0,
    };

    const applyStyle = isActive ? activeIndexStyle : inactiveIndexStyle;

    return (
        <Card
            sx={{
                alignSelf: 'center',
                justifySelf: 'center',
                height: 508,
                backgroundColor: '#FEFDF9',
                boxShadow: 'none',
                mt: 1.5,
                mb: 0,
                width: '340px',
                opacity: applyStyle.cardOpacity,
            }}
        >
            <Box position={'relative'}>
                <CardMedia
                    component={'img'}
                    image={cardContent.img}
                    alt={cardContent.heading}
                    sx={{
                        objectFit: 'cover',
                        width: 340,
                        height: 340,
                        borderRadius: '5px',
                    }}
                />
                <Grid
                    display={'flex'}
                    direction={'column'}
                    sx={{
                        position: 'absolute',
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))',
                        top: 0,
                        width: '100%',
                        p: 2,
                    }}
                >
                    <Grid size={2} textAlign={'center'} position={'relative'}>
                        <Box
                            component={'img'}
                            src="/profile-placeholder.png"
                            alt="Profile"
                            sx={{
                                height: '48px',
                                width: '48px',
                                objectFit: 'cover',
                            }}
                        />
                    </Grid>
                    <Grid size={9} alignContent={'center'} height={'48px'}>
                        <Typography mb={0} pl={1.5} fontSize={'16px'} fontWeight={'bold'} color={'white'}>
                            @someuser
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <CardContent
                sx={{
                    pt: 3,
                    pb: 0,
                    px: 0,
                    width: '100%',
                    opacity: applyStyle.textOpacity,
                }}
            >
                <Typography
                    gutterBottom
                    variant="body2"
                    component={'div'}
                    fontSize={'14px'}
                    textOverflow={'ellipsis'}
                    m={0}
                >
                    {cardContent.text}
                </Typography>
            </CardContent>
        </Card>
    );
};
const Galary = ({ galaryArray = defaultGalaryArray }) => {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(2);

    const scrollToActiveIndex = (index) => {
        if (scrollContainerRef.current) {
            const containerWidth = scrollContainerRef.current.offsetWidth;
            const cardWidth = 365;
            const scrollPosition = index * cardWidth - containerWidth / 2 + cardWidth / 2;

            const maxScrollLeft = scrollContainerRef.current.scrollWidth - containerWidth;
            scrollContainerRef.current.scrollLeft = Math.max(0, Math.min(scrollPosition, maxScrollLeft));
        }
    };

    const scrollLeft = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = Math.max(prevIndex - 1, 0);
            scrollToActiveIndex(newIndex);
            return newIndex;
        });
    };

    const scrollRight = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = Math.min(prevIndex + 1, galaryArray.length - 1);
            scrollToActiveIndex(newIndex);
            return newIndex;
        });
    };

    useEffect(() => {
        scrollToActiveIndex(activeIndex);
    }, [activeIndex]);

    return (
        <Grid container direction={'row'} flexWrap={'nowrap'} alignItems={'center'}>

            <Grid size={1.5} mb={6} mr={1} textAlign={'right'} alignSelf={'start'} pt={'146px'}>
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

            <Grid
                size={9}
                container
                direction="row"
                wrap="nowrap"
                sx={{
                    overflowX: 'hidden',
                    gap: 2.5,
                    mb: 6,
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    '&::-webkit-scrollbar': { display: 'none' },
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
                        <GalaryCard cardContent={cardContent} activeIndex={activeIndex} currentIndex={index} />
                    </Grid>
                ))}
            </Grid>

            <Grid size={1.5} mb={6} ml={1} textAlign={'left'} alignSelf={'start'} pt={'146px'}>
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
        </Grid>
    );
};

const ContentWithInstaPosts = ({ content = defaultContent }) => {
    return (
        <>
            <Container sx={{ textAlign: 'center', mt: 18, mb: 0 }}>
                <Typography variant="h4" fontWeight={'bold'} mb={0} pb={0}>
                    {content.heading}
                </Typography>
            </Container>
            <Container sx={{ textAlign: 'center' }}>
                <Typography fontSize={'16px'} mt={3} mb={3}>
                    {content.subheading}
                </Typography>
            </Container>
            <Galary />
        </>
    )
}

export default ContentWithInstaPosts