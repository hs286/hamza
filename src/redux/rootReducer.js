import {combineReducers} from "redux";
import serviceReducers from "./reducer";

const rootReducer = combineReducers({
    service: serviceReducers
})

export default rootReducer;
