export const STEPPER_ACTIONS = {
    COMPLETE_STEP: 'COMPLETE_STEP',
    GO_BACK: 'GO_BACK',
    SET_ACTIVE_STEP: 'SET_ACTIVE_STEP',
    CHECK_STEP: 'CHECK_STEP',
}


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
        url: '/order/infos-zum-event',
    },

    {
        step: 1,
        icon: <CardGiftcardIcon />,
        label: 'Deine Box',
        checked: false,
        active: false,
        url: '/order/deine-box',
    },

    {
        step: 2,
        icon: <LocalShippingIcon />,
        label: 'Bestellung',
        checked: false,
        active: false,
        url: '/order/bestellung',
    }
]

const StepperReducer = (state, action) => {
    console.log('STEPPER_REDUCER', state, action)

    switch (action.type) {
        case STEPPER_ACTIONS.COMPLETE_STEP:
            const { currentStepData } = action.payload;
            const currentIndexStep = currentStepData[0].step

            console.log('current step: ', currentIndexStep)

            if (currentIndexStep === state.length - 1) {
                return [
                    ...state
                ]
            }

            return state.map((step, index) => {

                if (index === currentIndexStep) {
                    return {
                        ...step,
                        active: false,
                        checked: true,
                    }
                }
                if (index === currentIndexStep + 1) {
                    return {
                        ...step,
                        active: true,
                    }
                }
                return step;
            })
        case STEPPER_ACTIONS.GO_BACK:
            return [
                ...state
            ];
        case STEPPER_ACTIONS.SET_ACTIVE_STEP:
            return state.map((step, idx) => ({
                ...step,
                active: idx === action.payload.step
            }));
        case STEPPER_ACTIONS.CHECK_STEP:
            return state.map((step, idx) =>
                idx === action.payload.step
                    ? { ...step, checked: true }
                    : step
            );
        case "RESET_STEPPER":
            return initialState;
        default:
            return state;
    }
}

export default StepperReducer;