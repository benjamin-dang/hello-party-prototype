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

    const  { handleClick, stateFunction } = onClick;

    return (
        <Grid size={{ ...size }} position={'relative'}>
            <Button variant="contained" onClick={()=> handleClick(option, stateFunction)} sx={{ backgroundColor: option.selected ? 'primary' : 'rgb(239, 233, 222)', color: option.selected ? 'white' : 'black', p: 1.5, borderRadius: 4, boxShadow: 'none', textTransform: 'none'
             }} fullWidth >
                {option.label}
            </Button>
            <CheckCircleIcon sx={{ position: 'absolute', top: 6, right: 8, width: 16, opacity: option.selected ? '1' : '0', color: 'white' }} />
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