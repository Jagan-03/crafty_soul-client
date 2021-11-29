import * as api from "../controllers/collections";

export const getCollection = () => async(dispatch) => {
    try {
        const { data } = await api.fetchCollections(); 
        dispatch({ type : "FETCH_ALL COLLECTION", payload: data });
        
    } catch (error) {
        console.log(error.message);
    }
}