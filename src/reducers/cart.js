const cart = (cart = [], action) => {
    switch (action.type) {
        case "FETCH_ALL CART" :
            return action.payload;
        case "ADD" : 
            return [...cart, action.payload];    
        case "UPDATE" : 
            const prevCart = [...cart];
            const updatedCart = prevCart.map(item => {
                if(((item.user_id === action.payload.user_id) && (item.name === action.payload.name)) && (item.description === action.payload.description)) {
                    item.quantity = item.quantity + 1;
                }
                return item;
            });
            return updatedCart;
        case "CART REDUCED":
            const prev = [...cart];
            const updated = prev.map(item => {
            if(((item.user_id === action.payload.user_id) && (item.name === action.payload.name)) && (item.description === action.payload.description)) {
                item.quantity = item.quantity - 1;
            }
            return item;
        });
            return updated;
        case "CART DELETED":
            const filter = {
                user_id: action.payload.user_id,
                name: action.payload.name, 
                description : action.payload.description
              };
            const newCart = cart.filter(item => {
                if((item.user_id === filter.user_id && item.name === filter.name) && item.description === filter.description){
                    return false;
                } else return true;
            });
            return newCart;
        case "REFRESH CART" :
            return cart;
        default : 
            return cart;        
    }  
}

export default cart;