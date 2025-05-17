const SURVEY_ACTIONS = {
    SET_EVENT_TYPE: 'SET_EVENT_TYPE',
    SET_AMOUNT_OF_PEOPLE: 'SET_AMOUNT_OF_PEOPLE',
    SET_EVENT_LOCATION: 'SET_EVENT_LOCATION',
    SET_EVENT_BOX_SIZE: 'SET_EVENT_BOX_SIZE',
    SET_EVENT_DATE: 'SET_EVENT_DATE',
    SET_EVENT_TIME: 'SET_EVENT_TIME',
    SET_EVENT_BOX_WITH_CAKE: 'SET_EVENT_BOX_WITH_CAKE',
    SET_EVENT_ADDITIONAL_INFO: 'SET_EVENT_ADDITIONAL_INFO',
    SET_ADDITIONAL_BACKERY: 'SET_ADDITIONAL_BACKERY',
    SET_ADDRESS: 'SET_ADDRESS',
    SET_CONTACT: 'SET_CONTACT',
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
    eventBoxWithCake: [
        { label: 'Ja', selected: false, type: 'box-with-cake-option' },
        { label: 'Nein', selected: true, type: 'box-with-cake-option' },
    ],
    eventDate: null,
    eventTime: null,
    eventAdditionalInfo: '',
    additionalBackery: [
        { 
            label: 'Schoko Kuchen', 
            selected: false, 
            type: 'backery-option', 
            image: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/image-placeholder.jpg' : '/backery-imgs/chocolate-cake.jpg', 
            position: 'right', 
            info: [
                { text: 'schokoladig' }, 
                { text: 'klassisch' }
            ] 
        },
        { 
            label: 'Cupcakes', 
            selected: false, 
            type: 'backery-option', 
            image: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/image-placeholder.jpg' : '/backery-imgs/cupcakes.jpg',
            info: [
                { text: 'klein' }, 
                { text: 'mit Creme' }, 
                { text: 'kinderfreundlich' }
            ]
        },
        { 
            label: 'Zartbitter Schoko Kuchen', 
            selected: false, 
            type: 'backery-option', 
            image: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/image-placeholder.jpg' : '/backery-imgs/dark-chocolate-cake.jpg',
            info: [
                { text: 'schokoladig' }, 
                { text: 'bitter' }
            ]
        },
        { 
            label: 'Macarons', 
            selected: false, 
            type: 'backery-option', 
            image: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/image-placeholder.jpg' : '/backery-imgs/macarons.webp',
            info: [
                { text: 'französisch' }, 
                { text: 'fruchtig' }, 
                { text: 'klein' }
            ]
        },
        { 
            label: 'Mini Schoko Muffins', 
            selected: false, 
            type: 'backery-option', 
            image: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/image-placeholder.jpg' : '/backery-imgs/mini-chocolate-muffins.jpg',
            info: [
                { text: 'schokoladig' }, 
                { text: 'klein' }, 
                { text: 'kinderfreundlich' }
            ]
        },
        { 
            label: 'Gemischte Cookies', 
            selected: false, 
            type: 'backery-option', 
            image: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/image-placeholder.jpg' : '/backery-imgs/mixed-cookies.jpg',
            info: [
                { text: 'amerikanisch' }, 
                { text: 'knusprig' }, 
                { text: 'kinderfreundlich' }
            ]
        },
        { 
            label: 'Roter Samtkuchen', 
            selected: false, 
            type: 'backery-option', 
            image: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/image-placeholder.jpg' : '/backery-imgs/red-velvet-cake.jpg',
            info: [
                { text: 'klassisch' }, 
                { text: 'mit Creme' }
            ]
        },
        { 
            label: 'Strawberry Cheescake', 
            selected: false, 
            type: 'backery-option', 
            image: (import.meta.env.VITE_USE_PLACEHOLDER_IMAGES == 'true') ? '/image-placeholder.jpg' : '/backery-imgs/strawberry-cheesecake.jpg',
            info: [
                { text: 'fruchtig' }, 
                { text: 'mit Creme' }
            ]
        },
    ],
    address: {
        vorname: "",
        nachname: "",
        strasse: "",
        plz: "",
        stadt: ""
    },
    contact: {
        email: "",
        telefon: ""
    },
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
                eventBoxSize: [
                    ...state.eventBoxSize.map((option) =>
                        option.label === action.payload.clickedOption.label
                            ? { ...option, selected: true }
                            : { ...option, selected: false }
                    ),
                ],
            };
        case SURVEY_ACTIONS.SET_EVENT_BOX_WITH_CAKE:
            return {
                ...state,
                eventBoxWithCake: [
                    ...state.eventBoxWithCake.map((option) =>
                        option.label === action.payload.clickedOption.label
                            ? { ...option, selected: true }
                            : { ...option, selected: false }
                    ),
                ],
            };
        case SURVEY_ACTIONS.SET_EVENT_ADDITIONAL_INFO:
            return {
                ...state,
                eventAdditionalInfo: action.payload.info,
            };
        case SURVEY_ACTIONS.SET_ADDITIONAL_BACKERY:
            return {
                ...state,
                additionalBackery: [
                    ...state.additionalBackery.map((option) =>
                        option.label === action.payload.clickedOption.label
                            ? { ...option, selected: !action.payload.clickedOption.selected }
                            : { ...option}
                    ),
                ],
            }
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
        case SURVEY_ACTIONS.SET_ADDRESS:
            return {
                ...state,
                address: {
                    ...state.address,
                    ...action.payload
                }
            };
        case SURVEY_ACTIONS.SET_CONTACT:
            return {
                ...state,
                contact: {
                    ...state.contact,
                    ...action.payload
                }
            };
        case "RESET_SURVEY":
            return initialSurveyState;
        default:
            return state;
    }
}

export { SURVEY_ACTIONS, SurveyReducer, initialSurveyState };