import { Container, Button, ButtonGroup, Box, Grid } from '@mui/material';

const CustomButton = ({ option, onClick }) => {


    const { handleClick, stateFunction } = onClick;


    return (
        <Button onClick={() => handleClick(option, stateFunction)} sx={
            {
                borderColor: '#FBF1E1',
                bgcolor: option.selected ? '#FBF1E1' : 'transparent',
                color: option.selected ? 'black' : 'black',
                textTransform: 'none',
                fontWeight: option.selected ? 'bold' : 'normal',
                '&:hover': {
                    fontWeight: 'bold',
                }
            }
        }>
            {option.label}
        </Button>
    )
}


const defaulOptions = [
    {
        label: '1',
        selected: true,
    },
    {
        label: '2',
        selected: false,
    },
    {
        label: '3',
        selected: false,
    },

]

const PersonSelectionButtonGrid = ({ options = defaulOptions, onClick }) => {

    return (
        <ButtonGroup fullWidth={true} variant="outlined" size="large">
            {options.map((option, index) => (
                <CustomButton key={index} option={option} onClick={onClick} />
            ))}

        </ButtonGroup>
    )
}

const PersonLeftColumn = ({ children }) => {
    return (
        <Grid direction={'column'} size={4}>
            {children}
        </Grid>
    )
}

const PersonRightColumn = ({ options, onClick }) => {
    return (
        <Grid direction={'column'} size={7} >
            <PersonSelectionButtonGrid options={options} onClick={onClick} />
        </Grid>
    )
}

const PersonSelectionRow = ({ children }) => {
    return (
        <Grid container direction={'row'} mt={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
            {children}
        </Grid>
    )
}



const PersonSelection = ({ children, sx }) => {
    return (
        <Container sx={{ ...sx }} maxWidth={'sm'}  >
            {children}
        </Container>
    )
}

export { PersonSelection, PersonSelectionRow, PersonLeftColumn, PersonRightColumn, PersonSelectionButtonGrid, CustomButton };