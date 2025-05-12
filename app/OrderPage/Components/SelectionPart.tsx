import { useState } from "react";
import { Grid, Button, Typography, Container } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const SelectionButtonGrid = ({ children }) => {
    return (
        <Grid container spacing={1} sx={{ my: 3 }} display={'flex'} justifyContent={'center'}>
            {children}
        </Grid>
    )
}

const SelectionButton = ({ option, onClick, size = { xs: 6, sm: 4, md: 3, lg: 2.4, xl: 2.4 } }) => {

    const { handleClick } = onClick;

    return (
        <Grid size={{ ...size }} position={'relative'}>
            <Button variant="contained" onClick={() => handleClick(option)} sx=
                {{
                    backgroundColor: option.selected ? '#FBF1E1' : 'transparent',
                    color: option.selected ? 'black' : 'black',
                    p: 1.5, fontWeight: option.selected ? 'bold' : 'normal',
                    borderRadius: 4,
                    borderColor: '#FBF1E1',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    boxShadow: 'none',
                    textTransform: 'none',
                    '&:hover': {
                        fontWeight: 'bold',
                    }
                }
                } fullWidth >
                {option.label}
            </Button>
            <CheckCircleIcon sx={
                {
                    position: 'absolute',
                    top: 6,
                    right: 8,
                    width: 16,
                    opacity: option.selected ? '1' : '0',
                    color: 'black'
                }
            } />
        </Grid>
    )
}

const SelectionPart = ({ children, sx }) => {
    return (
        <Container sx={{ ...sx }}>
            {children}
        </Container>
    )
}

export { SelectionButton, SelectionPart, SelectionButtonGrid };