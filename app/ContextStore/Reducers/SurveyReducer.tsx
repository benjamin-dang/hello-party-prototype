
const SURVEY_ACTIONS = {
    SET_EVENT_TYPE: 'SET_EVENT_TYPE',
    SET_AMOUNT_OF_PEOPLE: 'SET_AMOUNT_OF_PEOPLE',
    SET_EVENT_LOCATION: 'SET_EVENT_LOCATION',
    SET_EVENT_BOX_SIZE: 'SET_EVENT_BOX_SIZE',
    SET_EVENT_DATE: 'SET_EVENT_DATE',
    SET_EVENT_TIME: 'SET_EVENT_TIME',
}

const initialSurveyState = {
    eventOptions:
        [
            { label: 'Event 1', selected: true, type: 'event-option' },
            { label: 'Event 2', selected: false, type: 'event-option' },
            { label: 'Event 3', selected: false, type: 'event-option' },
            { label: 'Event 4', selected: false, type: 'event-option' },
            { label: 'Event 5', selected: false, type: 'event-option' },
            { label: 'Event 6', selected: false, type: 'event-option' },
            { label: 'Event 7', selected: false, type: 'event-option' },
            { label: 'Event 8', selected: false, type: 'event-option' },
            { label: 'Event 9', selected: false, type: 'event-option' },
            { label: 'Event 10', selected: false, type: 'event-option' },
        ],

    amountOfPeople: 4,
    /*
    [
        { label: '1', selected: true, type: 'people-option' },
        { label: '2', selected: false, type: 'people-option' },
        { label: '3', selected: false, type: 'people-option' },
        { label: '4', selected: false, type: 'people-option' },
    ],
    */
    eventLocation: [
        { label: 'Drinnen', selected: false, type: 'location-option' },
        { label: 'Draußen', selected: false, type: 'location-option' },
        { label: 'Hybrid', selected: true, type: 'location-option' },
    ],
    eventBoxSize: [
        { label: 'Klein', selected: false, type: 'box-size-option' },
        { label: 'Mittel', selected: true, type: 'box-size-option' },
        { label: 'Groß', selected: false, type: 'box-size-option' },
    ],
    eventDate: null,
    eventTime: null,
}

const SurveyReducer = (state, action) => {
    console.log('SURVEY_REDUCER', state, action.payload)

    switch (action.type) {
        case SURVEY_ACTIONS.SET_EVENT_TYPE:
            return {
                ...state,
                eventOptions: [
                    ...state.eventOptions.map((option) =>
                        option.label === action.payload.clickedOption.label
                            ? { ...option, selected: true }
                            : { ...option, selected: false }
                    ),
                ],
            };
        case SURVEY_ACTIONS.SET_AMOUNT_OF_PEOPLE:
            return {
                ...state,
                amountOfPeople: action.payload.clickedOption
                /*
                amountOfPeople: [
                    ...state.amountOfPeople.map((option) =>
                        option.label === action.payload.clickedOption.label
                            ? { ...option, selected: true }
                            : { ...option, selected: false }
                        ),
                    ],
                */
            };
        case SURVEY_ACTIONS.SET_EVENT_LOCATION:
            return {
                ...state,
                eventLocation: [
                    ...state.eventLocation.map((option) =>
                        option.label === action.payload.clickedOption.label
                            ? { ...option, selected: true }
                            : { ...option, selected: false }
                    ),
                ],
            };
        case SURVEY_ACTIONS.SET_EVENT_BOX_SIZE:
            return {
                ...state,
                eventLocation: [
                    ...state.eventBoxSize.map((option) =>
                        option.label === action.payload.clickedOption.label
                            ? { ...option, selected: true }
                            : { ...option, selected: false }
                    ),
                ],
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