import { Box, Button, Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import { PersonRightColumn } from "./Components/PersonSelection";

import { useContext } from "react";
import { SurveyContext } from "../ContextStore/ContextProvider/SurveyProvider";
const cardContent =
{
    imgSrc: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/image-placeholder.jpg' :
        '/image-placeholder.jpg',
    imgAlt: 'Example Box',
}

const DeineBox = () => {
    const { surveyData, dispatch } = useContext(SurveyContext);

    const generalOnClick = (option) => {
        if (option.type === 'box-size-option') {
            console.log('Clicked option:', option);
            dispatch({
                type: 'SET_EVENT_BOX_SIZE',
                payload: { clickedOption: option },
            });
        }
    }

    return (
        <>
            <Container sx={{ textAlign: 'center', my: 4 }}>
                <Typography variant="h5" fontWeight={'bold'} gutterBottom>
                    Deine Box
                </Typography>
                <Typography variant="body2" fontSize={'16px'} mt={2} gutterBottom>
                    Deine Box ist fast perfekt, nur noch ein finaler schliff.
                </Typography>

                <Container sx={{ display: 'flex', py: 2 }}  >
                    <Grid container justifyContent={'center'} alignItems={'center'} width={'100%'} direction={'row'} my={0} py={0}>
                        <Grid size={{ xs: 12, md: 6 }} py={1} my={0} px={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                            <Box
                                component="img"
                                src={cardContent.imgSrc}
                                alt={cardContent.imgAlt}

                                sx={{
                                    boxShadow: 'none',
                                    maxHeight: '90%',
                                    minHeight: '200px',
                                    maxWidth: '90%',
                                    minWidth: '200px',

                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    alt: cardContent.imgAlt
                                }}

                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} py={1} my={0} display={'flex'} px={1} alignItems={'center'}>
                            <Box
                                component="div"
                                sx={{
                                    boxShadow: 'none',
                                    maxHeight: '90%',
                                    minHeight: '200px',
                                    maxWidth: '90%',
                                    minWidth: '200px',
                                }}>
                                <Grid container direction={'column'}>
                                    <Grid>
                                        <Typography variant="h5" fontWeight={'bold'}>
                                            Wie groß soll deine Box sein?
                                        </Typography>
                                    </Grid>

                                    <PersonRightColumn size={12} options={surveyData.eventBoxSize} onClick={{ handleClick: generalOnClick }} />
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>

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