const SURVEY_ACTIONS = {
    SET_EVENT_TYPE: 'SET_EVENT_TYPE',
    SET_AMOUNT_OF_PEOPLE: 'SET_AMOUNT_OF_PEOPLE',
    SET_EVENT_LOCATION: 'SET_EVENT_LOCATION',
    SET_EVENT_DATE: 'SET_EVENT_DATE',
    SET_EVENT_TIME: 'SET_EVENT_TIME',
}

const initialSurveyState = {
    eventType: null,
    amountOfPeople: null,
    eventLocation: null,
    eventDate: null,
    eventTime: null,
}


const SurveyReducer = (state, action) => {
    console.log('SURVEY_REDUCER', state, action)

    switch (action.type) {
        case SURVEY_ACTIONS.SET_EVENT_TYPE:
            return {
                ...state,
                eventType: action.payload,
            };
        case SURVEY_ACTIONS.SET_AMOUNT_OF_PEOPLE:
            return {
                ...state,
                amountOfPeople: action.payload,
            };
        case SURVEY_ACTIONS.SET_EVENT_LOCATION:
            return {
                ...state,
                eventLocation: action.payload,
            };
        case SURVEY_ACTIONS.SET_EVENT_DATE:
            return {
                ...state,
                eventDate: action.payload,
            };
        case SURVEY_ACTIONS.SET_EVENT_TIME:
            return {
                ...state,
                eventTime: action.payload,
            };
        default:
            return state;
    }
}

export { SURVEY_ACTIONS, SurveyReducer, initialSurveyState };