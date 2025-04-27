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
    img: 'https://m.media-amazon.com/images/I/61fA3YxCJLL.jpg',
    heading: 'Dekor und Zubehör',
    text: 'Pefekt für Geburtstage',
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
            position: 'relative',
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

    const scrollContainerRef = useRef(null);

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

    return (
        <Grid container direction={'row'} flexWrap={'nowrap'} justifyItems={'center'} alignItems={'center'}>
            <Grid size={1}>
                <IconButton onClick={scrollLeft}>
                    <ArrowBackIcon />
                </IconButton>
            </Grid>
            <Grid size={10}
                container
                direction="row"
                wrap="nowrap"
                sx={{
                    overflowX: 'auto',
                    gap: 2,
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
                    >
                        <GalaryCard cardContent={cardContent} />
                    </Grid>
                ))}

            </Grid>
            <Grid size={1}>
                <IconButton onClick={scrollRight}>
                    <ArrowForwardIcon />
                </IconButton>
            </Grid>
        </Grid>
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