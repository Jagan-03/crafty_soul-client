import axios from "axios";

const CONNECTION_URL = "https://craftysoul.herokuapp.com/cart";

export const fetchCart = () => {
    const response = axios.get(CONNECTION_URL);
    return response;
}

export const addCart = (item) => {
    const response = axios.post(CONNECTION_URL, item);
    return response;
}

export const deleteCart = (item) => {
    const response = axios.patch(CONNECTION_URL, item);
    return response;
}

export const refreshCart = () => {
    const response = axios.delete(CONNECTION_URL);
    return response;
}