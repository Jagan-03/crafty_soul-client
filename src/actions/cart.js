import * as api from "../controllers/cart"; 

export const getCart = () => async(dispatch) => {
    try {
        const { data } = await api.fetchCart(); 
        dispatch({ type : "FETCH_ALL CART", payload: data });
        
    } catch (error) {
        console.log(error.message);
    }
}

export const addCart = (item) => async(dispatch) => {
    try {
        const { data } = await api.addCart(item);
        dispatch({ type : data, payload: item });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCart = (item) => async(dispatch) => {
    try {
        const { data } = await api.deleteCart(item);
        dispatch({ type : data, payload: item });
    } catch (error) {
        console.log(error);
    }
}

export const refreshCart = () => async(dispatch) => {
    try {
        const { data } = await api.refreshCart();
        dispatch({ type : "REFRESH CART", payload: data });
    } catch (error) {
        console.log(error);
    }
}