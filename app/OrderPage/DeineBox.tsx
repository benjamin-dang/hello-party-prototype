import { Button, Card, CardMedia, Container, Typography } from "@mui/material";


const cardContent =
{
    imgSrc: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? 'image-placeholder.jpg' :
        'image-placeholder.jpg',
    imgAlt: 'Example Box',
}

const DeineBox = () => {

    return (
        <>
            <Container sx={{ textAlign: 'center', my: 4 }}>
                <Typography variant="h5" fontWeight={'bold'} gutterBottom>
                    Deine Box
                </Typography>
                <Typography variant="body2" fontSize={'16px'} mt={2}>
                    Deine Box ist fast perfekt, nur noch ein finaler schliff.
                </Typography>

                <Container sx={{ backgroundColor: 'blue' }}>
                    <Card sx={{ boxShadow: 'none' }}>
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
                    </Card>
                </Container>
                <Typography variant="body2" fontSize={'16px'} mt={2}>
                    Box Bild
                    Kuchen ja nein?
                    größere Box?
                    Anmerkung fuer deine Box
                    Spizielles Thema?
                </Typography>
            </Container>

        </>
    );
}

export default DeineBox;