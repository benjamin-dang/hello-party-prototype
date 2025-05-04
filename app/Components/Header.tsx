import { AppBar, Container, Grid, Toolbar, Box, Button, Step } from "@mui/material"

import CustomStepper from "~/Components/CustomStepper"
import CelebrationIcon from '@mui/icons-material/Celebration';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { NavLink, useLocation, useMatch } from "react-router"
import { useState } from "react";

import { useContext } from "react";
import { StepperContext } from "~/ContextStore/ContextProvider/StepperProvider";
import { STEPPER_ACTIONS } from "~/ContextStore/Reducers/StepperReducer";

const routes = [
    {
        name: 'Event Boxen',
        route: '/event-boxen',
    },
    {
        name: 'Bestellen',
        route: '/order/infos-zum-event',
    },
    {
        name: 'Über Uns',
        route: '/about-us',

    },
]


const Navigation = ({ routes }) => {
    return (
        <Grid container flexWrap={'nowrap'}>
            {routes.map((route, index) => (
                <Grid key={index} flexShrink={0}>
                    <NavLink to={route.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button sx={{ marginLeft: 2, color: 'black' }}>
                            {route.name}
                        </Button>
                    </NavLink>
                </Grid>
            ))}
        </Grid>
    )
}

const LoginButton = () => {
    return (
        <Grid justifySelf={'flex-end'} sx={{ marginLeft: 'auto' }} >
            <Button variant="outlined" sx={{ px: 4, color: 'black', borderColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' } }}>
                Login
            </Button>
        </Grid>
    )
}


const Header = () => {

    const location = useLocation()
    const isOrderRoute = useMatch('/order/*')

    const [activeStep, setActiveStep] = useState(1)
    const { stepperData } = useContext(StepperContext)

    return (
        <>
            <AppBar position="sticky" elevation={0}>
                <Toolbar sx={{ backgroundColor: '#FEFDF9', color: '#000' }} >
                    <Grid container alignItems={'center'} width={'100%'} flexShrink={0} flexWrap={'nowrap'} >
                        <NavLink to={'/'}>
                            <Box
                                component='img'
                                src='/Logo-without-bg.png'
                                alt='Logo'
                                sx={{
                                    height: '60px',
                                    width: 'auto',
                                    objectFit: 'cover',
                                }}
                            />
                        </NavLink>
                        {isOrderRoute ? (
                            <Container sx={{ width: '80%' }} >
                                <CustomStepper stepDataArray={stepperData} />
                            </Container>
                        ) : (
                            <Navigation routes={routes} />
                        )}
                        <LoginButton />
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header