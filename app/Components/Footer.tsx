import { Box, Container, Grid, Typography, Button, IconButton } from "@mui/material";
import { NavLink } from "react-router";

const defaultNavLinkGrid = [
    {
        name: 'Hello Party',
        links: [
            {
                type: 'link',
                name: 'Geschenkgutschein',
                url: '/geschenkgutschein'
            },
            {
                type: 'link',
                name: 'Student and Graduate Discounts',
                url: '/student-discounts'
            },
            {
                type: 'link',
                name: 'Senioren- & Studentenrabatt',
                url: '/senioren-studentenrabatt'
            },
            {
                type: 'link',
                name: 'Rabatt Für Key-worker',
                url: '/key-worker'
            },
            {
                type: 'link',
                name: 'Rezepte',
                url: '/rezepte'
            },
            {
                type: 'link',
                name: 'Blog',
                url: '/blog'
            },
            {
                type: 'link',
                name: 'Cookie-Einstellungen',
                url: '/cookie-einstellungen'
            },
        ]
    },
    {
        name: 'Unser Unternehmen',
        links: [
            {
                type: 'link',
                name: 'HelloFresh Group',
                url: '/hellofresh-group'
            },
            {
                type: 'link',
                name: 'Jobs',
                url: '/jobs'
            },
            {
                type: 'link',
                name: 'Presse',
                url: '/presse'
            },
            {
                type: 'link',
                name: 'Neuer Look',
                url: '/neuer-look'
            },
        ]
    },
    {
        name: 'Arbeite mit uns',
        links: [
            {
                type: 'link',
                name: 'Blogger/Influencer',
                url: '/blogger-influencer'
            },
            {
                type: 'link',
                name: 'Affiliates',
                url: '/affiliates'
            },
            {
                type: 'link',
                name: 'Weihnachtsgeschenke für Mitarbeiter',
                url: '/weihnachtsgeschenke'
            },
            {
                type: 'link',
                name: 'Mitarbeiterverpflegung',
                url: '/mitarbeiterverpflegung'
            },
            {
                type: 'link',
                name: 'Gutscheine für Unternehmen',
                url: '/gutscheine-unternehmen'
            },
            {
                type: 'link',
                name: 'Marketingkooperationen',
                url: '/marketingkooperationen'
            },
        ]
    },
    {
        name: 'Hilfe',
        links: [
            {
                type: 'link',
                name: 'Hilfe-Center',
                url: '/hilfe-center'
            },
            {
                type: 'link',
                name: 'Finde eine Antwort',
                url: '/finde-eine-antwort'
            },
            {
                type: 'link',
                name: 'Verträge hier kündigen',
                url: '/vertraege-kuendigen'
            },
        ]
    },
    {
        name: 'Zahlungsarten',
        links: [
            {
                type: 'logo',
                name: 'mastercard',
                url: 'mastercard.svg'
            },
            {

                type: 'logo',
                name: 'visa',
                url: 'visa.svg'
            },
            {

                type: 'logo',
                name: 'amex',
                url: 'amex.svg'
            },
            {

                type: 'logo',
                name: 'paypal',
                url: 'paypal.png'
            },
        ]
    },
    // {
    //     name: 'Registriere dich vor',
    //     links: [
    //         {
    //             type: 'logo',
    //             name: 'apple-banner',
    //             url: 'appstore-banner.png',
    //             width: '100px'
    //         },
    //         {

    //             type: 'logo',
    //             name: 'google-play-banner',
    //             url: 'google-play-banner.webp',
    //             width: '100px'
    //         },
    //     ]
    // },
]

const defaultGridContainerData = {
    name: 'Title',
    links: [
        {
            name: 'Link 1',
            url: '/link1'
        },
        {
            name: 'Link 2',
            url: '/link2'
        },
        {
            name: 'Link 3',
            url: '/link3'
        },
    ]
}

const NavGridContainer = ({ gridContainerData = defaultGridContainerData }) => {
    return (
        <Grid container display={'grid'} direction={'row'} alignContent={'start'}>
            <Grid sx={{
                my: 1.5
            }}>
                <Typography variant="body2" fontWeight={'bold'} fontSize={'16px'}>
                    {gridContainerData.name}
                </Typography>
            </Grid>
            {gridContainerData.links.map((item, index) => {
                return (
                    <Box key={index}>
                        {item.type === 'link' ?
                            (
                                <Grid my={'2px'} key={index}>
                                    <NavLink to={item.url} key={index} style={{
                                        color: 'black',
                                    }}>
                                        <Typography variant="body2" fontSize={'14px'}>
                                            {item.name}
                                        </Typography>
                                    </NavLink>
                                </Grid>
                            ) : (
                                <Grid my={'2px'} key={index}>
                                    <Box
                                        component={'img'}
                                        src={item.url}
                                        alt={item.name}
                                        width={item.width ?? '50px'}
                                        height={'30px'}
                                        sx={{
                                            objectFit: 'contain',
                                        }}
                                    >
                                    </Box>
                                </Grid>
                            )
                        }
                    </Box>

                )
            })}
        </Grid>
    )
}

const Footer = ({ navLinkGrid = defaultNavLinkGrid }) => {
    return (
        <>
            <Container maxWidth='lg' sx={{
                py: 5,
            }}>
                <Grid container spacing={3} justifyContent={'center'}>
                    {navLinkGrid.map((item, index) => (
                        <NavGridContainer key={index} gridContainerData={navLinkGrid[index]} />
                    ))}
                </Grid>
            </Container>
            <Container sx={{
                py: 5,
            }}>
                <Grid container justifyContent={'space-between'} alignItems={'center'}>
                    <Grid container spacing={4}>
                        <Typography variant="body2" fontSize={'14px'} fontWeight={'bold'}>© HelloParty 2025</Typography>
                        <NavLink to={''} style={{
                            color: 'black',
                        }}>
                            <Typography variant="body2" fontSize={'14px'}>
                                AGB
                            </Typography>
                        </NavLink>
                        <NavLink to={''} style={{
                            color: 'black',
                        }}>
                            <Typography variant="body2" fontSize={'14px'}>
                                Datenschutz
                            </Typography>

                        </NavLink>
                        <NavLink to={''} style={{
                            color: 'black',
                        }}>
                            <Typography variant="body2" fontSize={'14px'}>
                                Impressum
                            </Typography>
                        </NavLink>
                    </Grid>
                    <Grid container spacing={3} alignItems={'center'}>
                        <Grid >
                            <Box
                                component={'img'}
                                src="facebook.svg"
                                alt="Facebook"
                                width={'25px'}
                                height={'25px'}
                                display={'block'}
                                sx={{
                                    objectFit: 'contain',
                                    borderRadius: '50%',
                                }}
                            />
                        </Grid>
                        <Grid>
                            <Box
                                component={'img'}
                                src="instagram.svg"
                                alt="Facebook"
                                width={'25px'}
                                height={'25px'}
                                display={'block'}
                                sx={{
                                    objectFit: 'contain',
                                    borderRadius: '50%',
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default Footer;