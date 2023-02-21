const initialState={
    couter:0
}

const reducer=(state=initialState , action) =>{

    switch (action.type) {
        case "INCREASE" :
            return {
                ...state ,
                counter : state.couter + 1 
            }
            default : return state;
    }
}

export default reducer;