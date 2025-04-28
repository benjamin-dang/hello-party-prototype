import { Box, Container, Grid, Typography, Button, IconButton } from "@mui/material";
import { NavLink } from "react-router";
import { fontWeight, styled } from "@mui/system";

/* 

Blogger/Influencer
Affiliates
Weihnachtsgeschenke für Mitarbeiter
Mitarbeiterverpflegung
Gutscheine für Unternehmen
Marketingkooperationen

Hilfe-Center
Finde eine Antwort
Verträge hier kündigen



*/

const defaultNavLinkGrid = [
    {
        name: 'Hello Party',
        links: [
            {
                name: 'Geschenkgutschein',
                url: '/geschenkgutschein'
            },
            {
                name: 'Student and Graduate Discounts',
                url: '/student-discounts'
            },
            {
                name: 'Senioren- & Studentenrabatt',
                url: '/senioren-studentenrabatt'
            },
            {
                name: 'Rabatt Für Key-worker',
                url: '/key-worker'
            },
            {
                name: 'Rezepte',
                url: '/rezepte'
            },
            {
                name: 'Blog',
                url: '/blog'
            },
            {
                name: 'Cookie-Einstellungen',
                url: '/cookie-einstellungen'
            },
        ]
    },
    {
        name: 'Unser Unternehmen',
        links: [
            {
                name: 'HelloFresh Group',
                url: '/hellofresh-group'
            },
            {
                name: 'Jobs',
                url: '/jobs'
            },
            {
                name: 'Presse',
                url: '/presse'
            },
            {
                name: 'Neuer Look',
                url: '/neuer-look'
            },
        ]
    },
    {
        name: 'Arbeite mit uns',
        links: [
            {
                name: 'Blogger/Influencer',
                url: '/blogger-influencer'
            },
            {
                name: 'Affiliates',
                url: '/affiliates'
            },
            {
                name: 'Weihnachtsgeschenke für Mitarbeiter',
                url: '/weihnachtsgeschenke'
            },
            {
                name: 'Mitarbeiterverpflegung',
                url: '/mitarbeiterverpflegung'
            },
            {
                name: 'Gutscheine für Unternehmen',
                url: '/gutscheine-unternehmen'
            },
            {
                name: 'Marketingkooperationen',
                url: '/marketingkooperationen'
            },
        ]
    },
    {
        name: 'Hilfe',
        links: [
            {
                name: 'Hilfe-Center',
                url: '/hilfe-center'
            },
            {
                name: 'Finde eine Antwort',
                url: '/finde-eine-antwort'
            },
            {
                name: 'Verträge hier kündigen',
                url: '/vertraege-kuendigen'
            },
        ]
    },
    {
        name: 'Zahlungsarten',
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
    },
    {
        name: 'Registriere dich vor',
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
    },
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
            {gridContainerData.links.map((item, index) => (
                <Grid my={'2px'} key={index}>
                    <NavLink to={item.url} key={index} style={{
                        color: 'black',
                    }}>
                        <Typography variant="body2" fontSize={'14px'}>
                            {item.name}
                        </Typography>
                    </NavLink>
                </Grid>
            ))}
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
                        <NavGridContainer gridContainerData={navLinkGrid[index]} />
                    ))}
                </Grid>
            </Container>
            <Container sx={{
                py: 5,
            }}>
                <Grid container justifyContent={'space-between'}>
                    <Grid container spacing={4}>
                        <Typography variant="body2" fontSize={'14px'} fontWeight={'bold'}>© HelloFresh 2025</Typography>
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
                    <Grid container spacing={4}>
                        <Grid>Icon1</Grid>
                        <Grid>Icon2</Grid>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default Footer;