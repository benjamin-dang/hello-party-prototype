
import { createContext, useReducer } from "react";
import OrderHistoryReducer from "../Reducers/OrderHistoryReducer";
import { orderInitialState } from '../Reducers/OrderHistoryReducer'

const orderContext = createContext(null);


const OrderHistoryProvider = ({ children }) => {
    const [orderHistory, orderDispatch] = useReducer(OrderHistoryReducer, orderInitialState);

    return (
        <orderContext.Provider value={{ orderHistory, orderDispatch }}>
            {children}
        </orderContext.Provider>
    );
}
export { orderContext };
export default OrderHistoryProvider;