import { useReducer, createContext } from "react";

import StepperReducer from "../Reducers/StepperReducer";

import CelebrationIcon from '@mui/icons-material/Celebration';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const initialState = [
    {
        step: 0,
        icon: <CelebrationIcon />,
        label: 'Infos zum Event',
        checked: false,
        active: true,
    },

    {
        step: 1,
        icon: <CardGiftcardIcon />,
        label: 'Deine Box',
        checked: false,
        active: false,
    },

    {
        step: 2,
        icon: <LocalShippingIcon />,
        label: 'Bestellung',
        checked: false,
        active: false,
    }
]

export const StepperContext = createContext(null);

 const StepperProvider = ({ children }) => {
    const [stepperData, dispatch] = useReducer(StepperReducer, initialState);

    return (
        <StepperContext.Provider value={{ stepperData, dispatch }}>
            {children}
        </StepperContext.Provider>
    )
}

export default StepperProvider;
