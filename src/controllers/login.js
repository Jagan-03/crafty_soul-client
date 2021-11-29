import axios from "axios";

const SERVER_URL =  "https://craftysoul.herokuapp.com/login";

export const loginUser = async (user) => {
    const response = await axios.post(SERVER_URL, user);
    return response;
}

