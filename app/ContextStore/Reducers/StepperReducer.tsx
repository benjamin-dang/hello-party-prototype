export const STEPPER_ACTIONS = {
    COMPLETE_STEP: 'COMPLETE_STEP',
    GO_BACK: 'GO_BACK',
}

const StepperReducer = (state, action) => {
    console.log('STEPPER_REDUCER', state, action)

    switch (action.type) {
        case STEPPER_ACTIONS.COMPLETE_STEP:
            return {
                ...state,
            };
        case STEPPER_ACTIONS.GO_BACK:
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default StepperReducer;