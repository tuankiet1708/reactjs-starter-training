import { combineReducers } from "redux";
import welcomeReducer from "./welcome";

export default combineReducers({
    welcome: welcomeReducer
})