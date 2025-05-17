import { AppBar, Container, Grid, Toolbar, Box, Button, Step, Menu, MenuItem } from "@mui/material"

import CustomStepper from "~/Components/CustomStepper"
import CelebrationIcon from '@mui/icons-material/Celebration';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { NavLink, useLocation, useMatch } from "react-router"
import { use, useState } from "react";

import { useContext } from "react";
import { StepperContext } from "~/ContextStore/ContextProvider/StepperProvider";
import { STEPPER_ACTIONS } from "~/ContextStore/Reducers/StepperReducer";

import { UserContext } from "~/ContextStore/ContextProvider/UserProvider";
import { USER_ACTION } from "~/ContextStore/Reducers/UserReducer";

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

//Back set statt back box


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
    const { user, userDispatch } = useContext(UserContext);
    const { name, email, isLoggedIn } = user;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        userDispatch({ type: USER_ACTION.LOGOUT });
        handleMenuClose();
    };

    const handleAccount = () => {
        // Navigate to account page or open dialog
        handleMenuClose();
    };

    return (
        <Grid justifySelf={'flex-end'} sx={{ marginLeft: 'auto' }}>
            {isLoggedIn ? (
                <>
                    <Button
                        variant="outlined"
                        sx={{ px: 4, color: 'black', borderColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' } }}
                        onClick={handleMenuOpen}
                        aria-controls={anchorEl ? 'user-menu' : undefined}
                        aria-haspopup="true"
                    >
                        {name || email}
                    </Button>
                    <Menu
                        id="user-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        disableScrollLock
                        PaperProps={{
                            sx: {
                                minWidth: anchorEl ? anchorEl.offsetWidth : undefined,
                            }
                        }}
                    >
                        <MenuItem onClick={handleAccount}>Kontoverwaltung</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </>
            ) : (
                <NavLink to={'/login'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button variant="outlined" sx={{ px: 4, color: 'black', borderColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' } }}>
                        Login
                    </Button>
                </NavLink>
            )}
        </Grid>
    );
};

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