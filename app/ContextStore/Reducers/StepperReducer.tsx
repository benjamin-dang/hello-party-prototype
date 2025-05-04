export const STEPPER_ACTIONS = {
    COMPLETE_STEP: 'COMPLETE_STEP',
    GO_BACK: 'GO_BACK',
}

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
        default:
            return state;
    }
}

export default StepperReducer;