import axios from "axios";

const CONNECTION_URL = "https://craftysoul.herokuapp.com/collections";

export const fetchCollections = () => {
    const response = axios.get(CONNECTION_URL);
    return response;
}