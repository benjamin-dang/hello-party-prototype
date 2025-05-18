const ORDER_HISTORY_ACTIONS = {
    ADD_ORDER: "ADD_ORDER",
    UPDATE_ORDER_STATUS: "UPDATE_ORDER_STATUS",
};

const orderInitialState = {
    orders: [
        {
            orderNumber: "ORD-1716000000000-1234",
            orderStatus: "completed",
            createdAt: "2024-05-15T10:30:00.000Z",
            details: {
                address: {
                    vorname: "Anna",
                    nachname: "Musterfrau",
                    strasse: "Musterstraße 1",
                    plz: "12345",
                    stadt: "Berlin"
                },
                contact: {
                    email: "anna@example.com",
                    telefon: "0123456789"
                },
                eventOptions: [
                    { label: "Geburtstag", selected: true, type: "event-option" }
                ],
                amountOfPeople: 10,
                eventLocation: [
                    { label: "Drinnen", selected: true, type: "location-option" }
                ],
                eventBoxWithCake: [
                    { label: "Ja", selected: true, type: "box-with-cake-option" }
                ],
                additionalBackery: [
                    { label: "Schoko Kuchen", selected: true, type: "backery-option" }
                ],
                eventAdditionalInfo: "Bitte keine Nüsse.",
                eventDate: "2024-06-01",
                eventTime: "15:00"
            }
        },
        {
            orderNumber: "ORD-1716100000000-5678",
            orderStatus: "cancelled",
            createdAt: "2024-05-16T14:00:00.000Z",
            details: {
                address: {
                    vorname: "Max",
                    nachname: "Mustermann",
                    strasse: "Beispielweg 2",
                    plz: "54321",
                    stadt: "Hamburg"
                },
                contact: {
                    email: "max@example.com",
                    telefon: "0987654321"
                },
                eventOptions: [
                    { label: "Hochzeit", selected: true, type: "event-option" }
                ],
                amountOfPeople: 50,
                eventLocation: [
                    { label: "Draußen", selected: true, type: "location-option" }
                ],
                eventBoxWithCake: [
                    { label: "Nein", selected: true, type: "box-with-cake-option" }
                ],
                additionalBackery: [
                    { label: "Cupcakes", selected: true, type: "backery-option" }
                ],
                eventAdditionalInfo: "",
                eventDate: "2024-07-10",
                eventTime: "18:00"
            }
        }
    ]
};

const OrderHistoryReducer = (state, action) => {
    switch (action.type) {
        case ORDER_HISTORY_ACTIONS.ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload],
            };
        case ORDER_HISTORY_ACTIONS.UPDATE_ORDER_STATUS:
            return {
                ...state,
                orders: state.orders.map(order =>
                    order.orderNumber === action.payload.orderNumber
                        ? { ...order, orderStatus: action.payload.newStatus }
                        : order
                ),
            };
        default:
            return state;
    }
};
export { ORDER_HISTORY_ACTIONS, orderInitialState }
export default OrderHistoryReducer