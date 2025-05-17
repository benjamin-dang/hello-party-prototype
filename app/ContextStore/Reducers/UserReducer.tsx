export const USER_ACTION = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    SET_USER: "SET_USER",
    SET_USER_NAME: "SET_USER_NAME",
    SET_USER_EMAIL: "SET_USER_EMAIL",
    SET_USER_PHONE: "SET_USER_PHONE",
    SET_USER_ADDRESS: "SET_USER_ADDRESS",
}

export const initialState = {
    user: null,
    isLoggedIn: false,
    name: "",
    email: "",
    phone: "",
    address: "",
}



export const UserReducer = (state, action) => {
    console.log("USER_REDUCER", state, action.payload);

    switch (action.type) {
        case USER_ACTION.LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            };
        case USER_ACTION.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        case USER_ACTION.SET_USER:
            return {
                ...state,
                user: action.payload.user,
            };
        case USER_ACTION.SET_USER_NAME:
            return {
                ...state,
                name: action.payload.name,
            };
        case USER_ACTION.SET_USER_EMAIL:
            return {
                ...state,
                email: action.payload.email,
            };
        case USER_ACTION.SET_USER_PHONE:
            return {
                ...state,
                user: { ...state.user, phone: action.payload.phone },
            };
        case USER_ACTION.SET_USER_ADDRESS:
            return {
                ...state,
                user: { ...state.user, address: action.payload.address },
            };

        default:
            return state;
    }
}
