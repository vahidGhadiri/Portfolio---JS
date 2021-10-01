import {combineReducers} from "redux"
import userInfoReducer from "./userInfo.reducer";

export const RootReducer = combineReducers({
    userInfo: userInfoReducer
})