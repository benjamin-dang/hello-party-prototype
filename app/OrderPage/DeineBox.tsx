import { Button, Container, Typography } from "@mui/material";

const DeineBox = () => {

    return (
        <>
            <Container sx={{ textAlign: 'center', my: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Deine Box
                </Typography>
                <Typography variant="body2" fontSize={'16px'}>
                    wird noch entwickelt
                </Typography>
            </Container>

        </>
    );
}

export default DeineBox;