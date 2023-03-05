import axios from "axios"

const fetchUserRequest = ()=>{
    return {
        type :"FETCH_USERS_REQUSET"
    }
}

const fetchUserSuccsess = users =>{
    return {
        type :"FETCH_USERES_SUCCSESS" ,
        payload : users
    }
}

const fetchUserFailure = error =>{
    return {
        type :"FETCH_USERES_FAILURE" ,
        payload : error
    }
}

export const fetchUser = ()=>{
    return(dispatch) =>{

        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
           .then(response => {
            const users= response.data 
            dispatch(fetchUserSuccsess(users))
           })
           .catch (error => {
            const errorMsg=error.message
            dispatch(fetchUserFailure(errorMsg))
           })


    }
   
}