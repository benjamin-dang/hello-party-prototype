import { AppBar, Container, Grid, Toolbar, Box, Button } from "@mui/material"

import { NavLink } from "react-router"

const routes = [
    {
        name: 'Event Boxen',
        route: '/event-boxen',
    },
    {
        name: 'Bestellen',
        route: '/order',
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
        <Grid justifySelf={'flex-end'} sx={{ marginLeft: 'auto' }}>
            <Button variant="outlined" sx={{px: 4, color: 'black', borderColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' } }}>
                Login
            </Button>
        </Grid>
    )
}

const Header = () => {

    return (
        <>
            <AppBar position="sticky" elevation={0}>
                    <Toolbar sx={{ backgroundColor: '#FEFDF9', color: '#000' }} >
                        <Grid container alignItems={'center'} width={'100%'} flexShrink={0} flexWrap={'nowrap'}>
                            <Box
                                component='img'
                                src='Logo-without-bg.png'
                                alt='Logo'
                                sx={{
                                    height: '60px',
                                    width: 'auto',
                                    objectFit: 'cover',
                                }}
                            />
                            <Navigation routes={routes} />
                            <LoginButton />
                        </Grid>
                    </Toolbar>
            </AppBar>
        </>
    )
}

export default Header