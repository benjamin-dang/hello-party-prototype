import { Container, Box, Tabs, Tab, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import { useState, useContext } from "react";
import { UserContext } from "~/ContextStore/ContextProvider/UserProvider";


function TabPanel({ children, value, index }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ width: '100%' }}
        >
            {value === index && (
                <Box sx={{ p: { xs: 2, sm: 4 } }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const AccountComponent = () => {
    const [tab, setTab] = useState(0);
    const { user } = useContext(UserContext);

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Paper
                elevation={0}
                sx={{
                    display: 'flex',
                    minHeight: 650,
                    borderRadius: 4,
                    overflow: 'hidden',
                    bgcolor: '#FBF1E1', // Accent background
                    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.04)'
                }}
            >
                <Box
                    sx={{
                        bgcolor: 'white',
                        px: 0,
                        py: 4,
                        minWidth: { xs: 120, sm: 200 },
                        borderRight: 1,
                        borderColor: '#F5E3C3', // subtle border
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch'
                    }}
                >
                    <Tabs
                        orientation="vertical"
                        value={tab}
                        onChange={handleTabChange}
                        TabIndicatorProps={{
                            sx: {
                                left: 0,
                                width: 4,
                                borderRadius: 2,
                                bgcolor: 'black', // black accent
                            }
                        }}
                        sx={{
                            '.MuiTab-root': {
                                alignItems: 'flex-start',
                                px: 3,
                                py: 2,
                                fontWeight: 500,
                                color: 'text.secondary',
                                borderRadius: 0,
                                textAlign: 'left',
                                '&.Mui-selected': {
                                    color: 'black',
                                    bgcolor: '#FBF1E1',
                                    fontWeight: 700,
                                }
                            },
                            minWidth: 0,
                        }}
                    >
                        <Tab label="Kontoverwaltung" />
                        <Tab label="Bestellverlauf" />
                        <Tab label="Bestellstatus" />
                    </Tabs>
                </Box>
                <Box sx={{ flexGrow: 1, bgcolor: 'white', minHeight: 420 }}>
                    <TabPanel value={tab} index={0}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: 'black' }}>
                            Kontoverwaltung
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Name" secondary={user.name || "-"} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="E-Mail" secondary={user.email || "-"} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Telefon" secondary={user.phone || "-"} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Adresse" secondary={user.address || "-"} />
                            </ListItem>
                        </List>
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: 'black' }}>
                            Bestellverlauf
                        </Typography>
                        <Typography color="text.secondary">Hier wird später der Bestellverlauf angezeigt.</Typography>
                    </TabPanel>
                    <TabPanel value={tab} index={2}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: 'black' }}>
                            Bestellstatus
                        </Typography>
                        <Typography color="text.secondary">Hier wird später der Bestellstatus angezeigt.</Typography>
                    </TabPanel>
                </Box>
            </Paper>
        </Container>
    );
};

export default AccountComponent;

