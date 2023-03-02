const initialState ={
    loading : false ,
    users :[] ,
    error : ""
}

const userReducer = (state = initialState , action) =>{
    switch(action.type){
        case "FETCH_USERS_REQUSET":
            return {
                ...state ,
                loading : true
            }
         case "FETCH_USERES_SUCCSESS" :
            return {
                users : action.payload ,
                loading : false
            } 
         case "FETCH_USERES_FAILURE" :
            return {
                error : action.payload ,
                loading : false ,
                users : []
            }   
        default :
        return state;
    }
}

export default userReducer ;