import axios from "axios";

const SERVER_URL =  "http://localhost:3001/auth/google";

export const registerGoogle = () => {
    const response = axios.get(SERVER_URL);
    return response;
}