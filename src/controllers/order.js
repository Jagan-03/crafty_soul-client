import axios from "axios";

const CONNECTION_URL = "https://craftysoul.herokuapp.com/orders";

export const fetchOrders = () => {
    const response = axios.get(CONNECTION_URL);
    return response;
}

export const addOrders = (order) => {
    const response = axios.post(CONNECTION_URL, order);
    return response;
}
