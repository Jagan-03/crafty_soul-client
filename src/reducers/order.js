const orders = (orders = [], action) => {
    switch (action.type) {
        case "FETCH_ALL ORDERS" :
            return action.payload;
        case "ADD ORDER" : 
            return [...orders, action.payload];
        default : 
            return orders;        
    }  
}

export default orders;