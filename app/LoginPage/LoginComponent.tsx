import { Container, Box, Typography, TextField, Button, Grid, Link } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { UserContext } from "~/ContextStore/ContextProvider/UserProvider"
import { USER_ACTION } from "~/ContextStore/Reducers/UserReducer"

const SNACKBAR_KEY = "showLoginSuccessSnackbar";

const LoginComponent = ({
    hideRedirect = false,
    initialRegister = {},
    initialLogin = {},
}) => {
    const { user, userDispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);
    const [loginData, setLoginData] = useState({ email: "", password: "", ...initialLogin });
    const [registerData, setRegisterData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        ...initialRegister,
    });
    const [errors, setErrors] = useState({});
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    useEffect(() => {
        if (window.localStorage.getItem(SNACKBAR_KEY) === "true") {
            setSnackbarOpen(true);
            setSnackbarMessage("Benutzer erfolgreich angemeldet oder registriert.");
            window.localStorage.removeItem(SNACKBAR_KEY);
        }
    }, []);

    const handleChange = (e, isReg = false) => {
        const { name, value } = e.target;
        if (isReg) {
            setRegisterData(prev => ({ ...prev, [name]: value }));
        } else {
            setLoginData(prev => ({ ...prev, [name]: value }));
        }
    };

    const validate = () => {
        let temp = {};
        if (isRegister) {
            temp.firstName = registerData.firstName ? "" : "Vorname erforderlich";
            temp.lastName = registerData.lastName ? "" : "Nachname erforderlich";
            temp.email = /\S+@\S+\.\S+/.test(registerData.email) ? "" : "Gültige E-Mail erforderlich";
            temp.password = registerData.password.length >= 6 ? "" : "Mind. 6 Zeichen";
            temp.confirmPassword = registerData.password === registerData.confirmPassword ? "" : "Passwörter stimmen nicht überein";
        } else {
            temp.email = /\S+@\S+\.\S+/.test(loginData.email) ? "" : "Gültige E-Mail erforderlich";
            temp.password = loginData.password.length >= 6 ? "" : "Mind. 6 Zeichen";
        }
        setErrors(temp);
        return Object.values(temp).every(x => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        if (isRegister) {
            userDispatch({
                type: USER_ACTION.SET_USER_NAME,
                payload: { name: `${registerData.firstName} ${registerData.lastName}`.trim() }
            });
            userDispatch({
                type: USER_ACTION.SET_USER_EMAIL,
                payload: { email: registerData.email }
            });
            userDispatch({ type: USER_ACTION.LOGIN });
            window.localStorage.setItem(SNACKBAR_KEY, "true");
            if (!hideRedirect) navigate("/"); // Redirect zur Home-Seite
        } else {
            userDispatch({
                type: USER_ACTION.SET_USER_NAME,
                payload: { name: loginData.email.split("@")[0] }
            });
            userDispatch({
                type: USER_ACTION.SET_USER_EMAIL,
                payload: { email: loginData.email }
            });
            userDispatch({ type: USER_ACTION.LOGIN });
            window.localStorage.setItem(SNACKBAR_KEY, "true");
            if (!hideRedirect) navigate("/"); // Redirect zur Home-Seite
        }
    };

    return (
        <Container maxWidth="sm" sx={{ pt: 10, pb: 10 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ p: 4, boxShadow: 2, borderRadius: 2, bgcolor: "white" }}>
                <Typography variant="h5" fontWeight="bold" align="center" mb={3}>
                    {isRegister ? "Registrieren" : "Login"}
                </Typography>
                <Grid container spacing={2}>
                    {isRegister && (
                        <>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    label="Vorname"
                                    name="firstName"
                                    fullWidth
                                    value={registerData.firstName}
                                    onChange={e => handleChange(e, true)}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    label="Nachname"
                                    name="lastName"
                                    fullWidth
                                    value={registerData.lastName}
                                    onChange={e => handleChange(e, true)}
                                    error={!!errors.lastName}
                                    helperText={errors.lastName}
                                />
                            </Grid>
                        </>
                    )}
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            label="E-Mail"
                            name="email"
                            type="email"
                            fullWidth
                            value={isRegister ? registerData.email : loginData.email}
                            onChange={e => handleChange(e, isRegister)}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            label="Passwort"
                            name="password"
                            type="password"
                            fullWidth
                            value={isRegister ? registerData.password : loginData.password}
                            onChange={e => handleChange(e, isRegister)}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                    </Grid>
                    {isRegister && (
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                label="Passwort bestätigen"
                                name="confirmPassword"
                                type="password"
                                fullWidth
                                value={registerData.confirmPassword}
                                onChange={e => handleChange(e, true)}
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword}
                            />
                        </Grid>
                    )}
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                >
                    {isRegister ? "Registrieren" : "Login"}
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid size={{ xs: 12 }}>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => setIsRegister(!isRegister)}
                        >
                            {isRegister
                                ? "Schon ein Konto? Login"
                                : "Noch kein Konto? Jetzt registrieren"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3500}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <MuiAlert onClose={() => setSnackbarOpen(false)} severity="success" elevation={6} variant="filled">
                    {snackbarMessage || "Benutzer erfolgreich angemeldet oder registriert."}
                </MuiAlert>
            </Snackbar>
        </Container>
    );
};

export default LoginComponent;