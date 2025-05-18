import { Container, Box, Tabs, Tab, Typography, Paper, List, ListItem, ListItemText, TextField, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Drawer, Divider } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "~/ContextStore/ContextProvider/UserProvider";
import { SurveyContext } from "~/ContextStore/ContextProvider/SurveyProvider";
import { StepperContext } from "~/ContextStore/ContextProvider/StepperProvider";
import { orderContext } from "~/ContextStore/ContextProvider/OrderHistoryProvider";
import { useNavigate } from "react-router";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { USER_ACTION } from "~/ContextStore/Reducers/UserReducer";
import { SURVEY_ACTIONS } from "~/ContextStore/Reducers/SurveyReducer";
import { STEPPER_ACTIONS } from "~/ContextStore/Reducers/StepperReducer";


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
    const { user, userDispatch } = useContext(UserContext);
    const { dispatch: surveyDispatch } = useContext(SurveyContext);
    const { dispatch: stepperDispatch } = useContext(StepperContext);
    const { orderHistory, orderDispatch } = useContext(orderContext);
    const navigate = useNavigate();

    // Redirect if not logged in
    useEffect(() => {
        if (!user?.isLoggedIn) {
            navigate("/login");
        }
    }, [user, navigate]);

    // Add local state for editing
    const [editMode, setEditMode] = useState(false);
    const [editValues, setEditValues] = useState({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
    });

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        // Keep local state in sync if user changes (e.g. after login)
        setEditValues({
            name: user.name || "",
            email: user.email || "",
            phone: user.phone || "",
            address: user.address || "",
        });
    }, [user]);

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        userDispatch({ type: USER_ACTION.SET_USER_NAME, payload: { name: editValues.name } });
        userDispatch({ type: USER_ACTION.SET_USER_EMAIL, payload: { email: editValues.email } });
        userDispatch({ type: USER_ACTION.SET_USER_PHONE, payload: { phone: editValues.phone } });
        userDispatch({ type: USER_ACTION.SET_USER_ADDRESS, payload: { address: editValues.address } });
        setEditMode(false);
    };

    const handleDeleteAccount = () => {
        // Clear user state
        userDispatch({ type: USER_ACTION.LOGOUT });
        userDispatch({ type: USER_ACTION.SET_USER_NAME, payload: { name: "" } });
        userDispatch({ type: USER_ACTION.SET_USER_EMAIL, payload: { email: "" } });
        userDispatch({ type: USER_ACTION.SET_USER_PHONE, payload: { phone: "" } });
        userDispatch({ type: USER_ACTION.SET_USER_ADDRESS, payload: { address: "" } });

        // Clear survey state
        surveyDispatch({ type: "RESET_SURVEY" }); // You need to implement this action in your SurveyReducer

        // Clear stepper state
        stepperDispatch({ type: "RESET_STEPPER" }); // You need to implement this action in your StepperReducer

        setDeleteDialogOpen(false);
        navigate("/"); // Optional: redirect to home
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
                        <Box display="flex" alignItems="center" mb={2}>
                            <Typography variant="h5" fontWeight="bold" sx={{ color: 'black', flexGrow: 1 }}>
                                Kontoverwaltung
                            </Typography>
                            <IconButton
                                color={editMode ? "primary" : "default"}
                                onClick={() => {
                                    if (editMode) handleSave();
                                    else setEditMode(true);
                                }}
                                sx={{ ml: 2 }}
                            >
                                {editMode ? <SaveIcon /> : <EditIcon />}
                            </IconButton>
                        </Box>
                        <List>
                            <ListItem>
                                {editMode ? (
                                    <TextField
                                        label="Name"
                                        name="name"
                                        value={editValues.name}
                                        onChange={handleEditChange}
                                        fullWidth
                                        size="small"
                                    />
                                ) : (
                                    <ListItemText primary="Name" secondary={user.name || "-"} />
                                )}
                            </ListItem>
                            <ListItem>
                                {editMode ? (
                                    <TextField
                                        label="E-Mail"
                                        name="email"
                                        value={editValues.email}
                                        onChange={handleEditChange}
                                        fullWidth
                                        size="small"
                                    />
                                ) : (
                                    <ListItemText primary="E-Mail" secondary={user.email || "-"} />
                                )}
                            </ListItem>
                            <ListItem>
                                {editMode ? (
                                    <TextField
                                        label="Telefon"
                                        name="phone"
                                        value={editValues.phone}
                                        onChange={handleEditChange}
                                        fullWidth
                                        size="small"
                                    />
                                ) : (
                                    <ListItemText primary="Telefon" secondary={user.phone || "-"} />
                                )}
                            </ListItem>
                            <ListItem>
                                {editMode ? (
                                    <TextField
                                        label="Adresse"
                                        name="address"
                                        value={editValues.address}
                                        onChange={handleEditChange}
                                        fullWidth
                                        size="small"
                                    />
                                ) : (
                                    <ListItemText primary="Adresse" secondary={user.address || "-"} />
                                )}
                            </ListItem>
                        </List>
                        <>
                            <Box mt={4} display="flex" justifyContent="flex-end">
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => setDeleteDialogOpen(true)}
                                >
                                    Konto löschen
                                </Button>
                            </Box>
                            <Dialog
                                open={deleteDialogOpen}
                                onClose={() => setDeleteDialogOpen(false)}
                            >
                                <DialogTitle color="error">Konto wirklich löschen?</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Achtung: Diese Aktion kann nicht rückgängig gemacht werden.<br />
                                        Dein Konto und alle gespeicherten Daten werden dauerhaft gelöscht.<br /><br />
                                        Bist du sicher, dass du dein Konto löschen möchtest?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => setDeleteDialogOpen(false)}>
                                        Abbrechen
                                    </Button>
                                    <Button
                                        onClick={handleDeleteAccount}
                                        color="error"
                                        variant="contained"
                                    >
                                        Ja, Konto löschen
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </>
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: 'black' }}>
                            Bestellverlauf
                        </Typography>
                        {orderHistory.orders && orderHistory.orders.length > 0 ? (
                            <List>
                                {orderHistory.orders.slice().reverse().map((order, idx) => (
                                    <ListItem
                                        button
                                        key={order.orderNumber}
                                        onClick={() => {
                                            setSelectedOrder(order);
                                            setDrawerOpen(true);
                                        }}
                                    >
                                        <ListItemText
                                            primary={
                                                <span>
                                                    Bestellung #{order.orderNumber}
                                                    <span
                                                        style={{
                                                            marginLeft: 12,
                                                            fontWeight: 700,
                                                            color:
                                                                order.orderStatus === "in progress"
                                                                    ? "#1976d2"
                                                                    : order.orderStatus === "completed"
                                                                    ? "#2e7d32"
                                                                    : order.orderStatus === "cancelled"
                                                                    ? "#d32f2f"
                                                                    : "#333",
                                                        }}
                                                    >
                                                        {/* Always show the dot and status */}
                                                        <span style={{
                                                            color:
                                                                order.orderStatus === "in progress"
                                                                    ? "#1976d2"
                                                                    : order.orderStatus === "completed"
                                                                    ? "#2e7d32"
                                                                    : order.orderStatus === "cancelled"
                                                                    ? "#d32f2f"
                                                                    : "#333",
                                                            marginLeft: 6
                                                        }}>
                                                            ● {order.orderStatus || "Unbekannt"}
                                                        </span>
                                                    </span>
                                                </span>
                                            }
                                            secondary={`Datum: ${new Date(order.createdAt).toLocaleString()}`}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <Typography color="text.secondary">Noch keine Bestellungen vorhanden.</Typography>
                        )}

                        {/* Drawer for order details */}
                        <Drawer
                            anchor="bottom"
                            open={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                        >
                            <Box sx={{ p: 3, minHeight: 300 }}>
                                {selectedOrder && (
                                    <>
                                        <Typography variant="h6" gutterBottom>
                                            Bestellung #{selectedOrder.orderNumber}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color:
                                                    selectedOrder.orderStatus === "in progress"
                                                        ? "primary.main"
                                                        : selectedOrder.orderStatus === "completed"
                                                        ? "success.main"
                                                        : selectedOrder.orderStatus === "cancelled"
                                                        ? "error.main"
                                                        : "text.primary",
                                                fontWeight: "bold",
                                                mb: 1,
                                            }}
                                        >
                                            Status: {selectedOrder.orderStatus}
                                        </Typography>
                                        <Typography>Datum: {new Date(selectedOrder.createdAt).toLocaleString()}</Typography>
                                        <Divider sx={{ my: 2 }} />
                                        <Typography variant="subtitle1" fontWeight="bold">Details:</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary="Vorname" secondary={selectedOrder.details.address?.vorname || "-"} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Nachname" secondary={selectedOrder.details.address?.nachname || "-"} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="E-Mail" secondary={selectedOrder.details.contact?.email || "-"} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Event Box für" secondary={selectedOrder.details.eventOptions?.find(opt => opt.selected)?.label || "-"} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Anzahl der Personen" secondary={selectedOrder.details.amountOfPeople || "-"} />
                                            </ListItem>
                                            {/* Add more details as needed */}
                                        </List>
                                        <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
                                            {selectedOrder.orderStatus === "in progress" && (
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    onClick={() => {
                                                        // Update the selected order's status to "cancelled"
                                                        orderDispatch({
                                                            type: "UPDATE_ORDER_STATUS",
                                                            payload: {
                                                                orderNumber: selectedOrder.orderNumber,
                                                                newStatus: "cancelled"
                                                            }
                                                        });
                                                        setDrawerOpen(false);
                                                    }}
                                                >
                                                    Bestellung stornieren
                                                </Button>
                                            )}
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => {
                                                    // Clone the selected order, update status and date, and add to history
                                                    const newOrder = {
                                                        ...selectedOrder,
                                                        orderNumber: `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
                                                        orderStatus: "in progress",
                                                        createdAt: new Date().toISOString(),
                                                    };
                                                    orderDispatch({ type: "ADD_ORDER", payload: newOrder });
                                                    setDrawerOpen(false);
                                                }}
                                            >
                                                Erneut bestellen
                                            </Button>
                                        </Box>
                                    </>
                                )}
                            </Box>
                        </Drawer>
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

