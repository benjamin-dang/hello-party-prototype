import { Container, IconButton, Typography, Grid, Box, Card, CardContent, CardMedia, CardActionArea } from "@mui/material"
import CustomButton from "../../Components/CustomButton"

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRef } from "react";


const defaultContent = {
    heading: 'Deine Box, für deinen Anlass personalisiert',
    subheading: 'Passnder Inhalt für jedes Event, damit du immer die richtige Wahl triffst',
}

const defaultGalaryCardContent = {
    img: 'public/decorating.png',
    heading: 'Dekor und Zubehör',
    text: 'Pefekt für Geburtstage',
    profileImg: 'public/profile-placeholder.png'
}

const defaultGalaryArray = [
    defaultGalaryCardContent,
    defaultGalaryCardContent,
    defaultGalaryCardContent,
    defaultGalaryCardContent,
    defaultGalaryCardContent,
    defaultGalaryCardContent,
    defaultGalaryCardContent,
    defaultGalaryCardContent,

]

const GalaryCard = ({ cardContent = defaultGalaryCardContent }) => {
    return (
        <Card sx={{
            alignSelf: 'center',
            justifySelf: 'center',
            height: 508,
            backgroundColor: '#FEFDF9',
            boxShadow: 'none',
            mt: 1.5,
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
                <Grid display={'flex'} direction={'column'}
                    sx={{
                        position: 'absolute',
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))',
                        top: 0,
                        width: '100%',
                        p: 2

                    }}
                >
                    <Grid size={2} textAlign={'center'} position={'relative'}>
                        <Box component={'img'}
                            src="public/profile-placeholder.png"
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
            <CardContent>

            </CardContent>

        </Card>
    )
}

const Galary = ({ galaryArray = defaultGalaryArray }) => {

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 365;
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 365;
        }
    };

    return (
        <Grid container direction={'row'} flexWrap={'nowrap'} alignItems={'center'}
        >
            <Grid size={1.5} mb={6} mr={1} textAlign={'right'} alignSelf={'start'} pt={'146px'}
            >
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

            <Grid size={9}
                container
                direction="row"
                wrap="nowrap"
                sx={{
                    overflowX: 'auto',
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
                        <GalaryCard cardContent={cardContent} />
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
        </Grid >
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