const authReducer = (state = { authData : null }, action) => {
    switch (action.type) {
        case "AUTH" :
            localStorage.setItem("userToken", action?.data.token);
            localStorage.setItem("user_id", action?.data.result.googleId);
            localStorage.setItem("user_email", action?.data.result.email);
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return {...state, authData : action?.data };    
        default : 
            return state;        
    }  
}

export default authReducer;