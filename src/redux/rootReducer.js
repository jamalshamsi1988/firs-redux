import { combineReducers } from "redux";
import numberReducer from "./number/numberReducer";
import counterReducer from "./counter/counterReducer";
import userReducer from './users/userReducer';

const rootReducer=combineReducers({
    numberState: numberReducer ,
    counterState : counterReducer ,
    userState : userReducer
})

export default rootReducer;