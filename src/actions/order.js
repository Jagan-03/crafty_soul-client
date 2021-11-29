import * as api from "../controllers/order"; 

export const getOrder = () => async(dispatch) => {
    try {
        const { data } = await api.fetchOrders(); 
        dispatch({ type : "FETCH_ALL ORDERS", payload: data });
        
    } catch (error) {
        console.log(error.message);
    }
}

export const addOrder = (order) => async(dispatch) => {
    try {
        const { data } = await api.addOrders(order);
        dispatch({ type : "ADD ORDER", payload: order });
        return data._doc;
    } catch (error) {
        console.log(error.message);
    }
}
