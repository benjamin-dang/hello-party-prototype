import { createContext, useReducer } from 'react';

import { UserReducer, initialState } from '../Reducers/UserReducer';

export const UserContext = createContext(null);

const UserProvider = ({children})=> {
    const [user, userDispatch] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={{user, userDispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
