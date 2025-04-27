import { Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '16px',
    padding: '12px 24px',
    '&:hover': {
        backgroundColor: 'rgb(0,0,0,0.8)', color: 'white',
    },
}));

export default CustomButton;

