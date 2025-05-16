import { Box, Button, Card, CardMedia, Container, Grid, Typography, FormGroup, FormControlLabel, Switch, TextField, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Accordion, CardActionArea, Icon, IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import { SurveyContext } from "../ContextStore/ContextProvider/SurveyProvider";
import CustomButton from "~/Components/CustomButton";

import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const cardContent =
{
    imgSrc: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/image-placeholder.jpg' :
        '/image-placeholder.jpg',
    imgAlt: 'Example Box',
}

const DeineBox = () => {
    const { surveyData, dispatch } = useContext(SurveyContext);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleAdditionalInfo = (event) => {
        dispatch({
            type: 'SET_EVENT_ADDITIONAL_INFO',
            payload: { info: event.target.value },
        });
    }

    const switchHanlder = (event) => {
        dispatch({
            type: 'SET_EVENT_BOX_WITH_CAKE',
            payload: { clickedOption: { label: event.target.checked ? 'Ja' : 'Nein', selected: event.target.checked, type: 'box-with-cake-option' } },
        });
    }

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    }

    return (
        <>
            <Container sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
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
                        <Grid size={{ xs: 12, md: 6 }} py={1} my={0} display={'flex'} px={1} >
                            <Box
                                component="div"
                                sx={{
                                    boxShadow: 'none',
                                    maxHeight: '90%',
                                    minHeight: '200px',
                                    maxWidth: '90%',
                                    minWidth: '200px',
                                }}>
                                <Grid container direction={'column'} textAlign={'left'} justifyContent={'center'} alignItems={'flex-start'} width={'100%'} my={0} py={0}>
                                    <Grid mb={3}>
                                        <Typography variant="h5" fontWeight={'bold'} gutterBottom>
                                            Möchtest du noch etwas für dein Event backen?
                                        </Typography>
                                        <FormGroup sx={{ mb: 2 }}>
                                            <FormControlLabel control={
                                                <Switch
                                                    checked={surveyData.eventBoxWithCake[0].selected}
                                                    onChange={switchHanlder}

                                                />
                                            } label="Ja, möchte ich!" />
                                        </FormGroup>
                                        {
                                            surveyData.eventBoxWithCake[0].selected &&
                                            <Grid mb={3} >
                                                <CustomButton
                                                    onClick={toggleDrawer(true)}
                                                    sx={{
                                                        '&:hover': {
                                                            backgroundColor: 'transparent',
                                                            color: 'black',
                                                            border: '1px solid black',
                                                            padding: '11px 23px',
                                                        }
                                                    }} fullWidth>
                                                    { (surveyData.additionalBackery.filter(item => item.selected).length > 0) ? 'Back Box Ändern ' : 'Back Box Auswählen' }
                                                </CustomButton>
                                                <React.Fragment>
                                                    <Drawer
                                                        anchor={'bottom'}
                                                        open={drawerOpen}
                                                        onClose={toggleDrawer(false)}
                                                    >
                                                        {<DrawerContent toggleDrawer={toggleDrawer} />}
                                                    </Drawer>
                                                </React.Fragment>

                                            </Grid>
                                        }
                                        <Typography variant="body2" fontSize={'16px'} mb={2} gutterBottom>
                                            Du wählst aus was du magst, wir packen es für dich zum selber backen in eine seperate Box. Mehr erfährst du <a style={{ color: 'blue' }}>hier</a>.
                                        </Typography>
                                    </Grid>

                                    <Grid>
                                        <Typography variant="h5" fontWeight={'bold'}>
                                            Noch Anmerkungen zu deiner Box?
                                        </Typography>
                                        <Typography variant="body2" fontSize={'16px'} my={2} gutterBottom>
                                            Hier kannst du uns noch mitteilen, was dir wichtig ist. z.B. Allergien, Vorlieben, etc.
                                        </Typography>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Anmerkungen"

                                            multiline
                                            rows={3}
                                            fullWidth
                                            onChange={handleAdditionalInfo}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>

                </Container>
                <Typography variant="body2" fontSize={'16px'} mt={1}>
                    Einfach und schnell, so wie es sein soll!
                </Typography>
            </Container>

        </>
    );
}

export default DeineBox;


const DrawerContent = ({ toggleDrawer }) => {
    const drawerTextcontent = {
        heading: 'Back Box auswählen',
        subheading: 'Wähle ganz einfach aus was du magst und wir packen die nötigen zutaten in eine seperate Box.',
    }
    return (
        <Box
            sx={{
                width: 'auto',
                px: 3,
                py: 3,
            }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
            position={'relative'}
        >
            <IconButton aria-label="close" size="medium"
                sx={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    backgroundColor: 'lightgrey',
                }}>
                <CloseIcon
                    fontSize="inherit"
                    onClick={toggleDrawer(false)}
                />
            </IconButton>
            <Grid container direction={'column'} >
                <Grid sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" fontWeight={'bold'} gutterBottom>
                        {drawerTextcontent.heading}
                    </Typography>
                    <Typography variant="body2" fontSize={'16px'} my={2} gutterBottom>
                        {drawerTextcontent.subheading}
                    </Typography>
                </Grid>
                <BackeryList />
            </Grid>
        </Box>
    )
}

const BackeryList = () => {

    useContext(SurveyContext);
    const { surveyData, dispatch } = useContext(SurveyContext);

    const handleBackeryOption = (clickedItem) => {
        const selectedItem = surveyData.additionalBackery.find(item => item.label === clickedItem.label);
        console.log('backeryList', surveyData.additionalBackery);
        dispatch({
            type: 'SET_ADDITIONAL_BACKERY',
            payload: { clickedOption: selectedItem },
        });
    }
    return (
        <Box>
            <Grid container height={'500px'} justifyContent={'center'} columnSpacing={2} overflow={'auto'} >
                {surveyData.additionalBackery.map((item, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ mb: 2 }} key={index}>
                        <Card sx={{
                            borderWidth: 4, borderColor: 'transparent', borderStyle: 'solid', boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                            },

                        }}>
                            <CardActionArea
                                onClick={() => handleBackeryOption(item)}
                                sx={{
                                    '&:hover .label-overlay': {
                                        transform: 'translateY(-75%)',
                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                    },
                                    '&:hover .card-details': {
                                        display: 'block',
                                    }
                                }}
                            >
                                <Box sx={{ position: 'relative', width: '100%' }}>
                                    <IconButton aria-label="close" size="large"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,

                                            right: 0,
                                        }}>
                                        <CheckCircleIcon fontSize="inherit" color="primary" sx={{ display: (item.selected) ? 'block' : 'none', zIndex: 2 }} />
                                    </IconButton>

                                    <Box
                                        className="label-overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'end',

                                            transition: 'transform 0.4s cubic-bezier(.4,0,.2,1), background-color 0.3s',
                                            zIndex: 1,
                                            pointerEvents: 'none',
                                            p: 2,
                                            transform: (item.selected) ? 'translateY(-75%)' : 'translateY(0)',
                                        }}
                                    >
                                        <Typography
                                            position={'absolute'}
                                            sx={{
                                                color: 'white',
                                                fontSize: '1.5rem',
                                                fontWeight: 'bold',
                                                bottom: 10,
                                                textAlign: 'center',
                                                width: '80%',
                                            }}
                                        >

                                            {item.label}
                                        </Typography>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt={item.label}
                                        sx={{
                                            objectFit: 'cover',
                                            objectPosition: (item.position) ? item.position : 'center',
                                            width: '100%',
                                            aspectRatio: '1/1',
                                            borderRadius: '5px',
                                        }}
                                    />
                                    <Box position={'absolute'}
                                        className="card-details"
                                        sx={{
                                            display: (item.selected) ? 'block' : 'none',
                                            bottom: 10,
                                            left: 10,
                                        }}
                                    >
                                        <Grid container spacing={1}>
                                            {
                                                item.info.map((label, index) => (
                                                    <Grid key={index}>
                                                        <Typography variant="body2" fontSize={'14px'} fontWeight={'bold'} color="black" bgcolor={'white'} px={0.5} py={0.25} borderRadius={2} >
                                                            {label.text}
                                                        </Typography>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>

                                    </Box>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </Box>
    )
}