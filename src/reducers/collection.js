const collection = (collection = [], action) => {
    switch (action.type) {
        case "FETCH_ALL COLLECTION" :
            return action.payload;
        default : 
            return collection;        
    }  
}

export default collection;