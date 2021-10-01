import {combineReducers} from "redux"
import portfolioReducer from "./portfoilio.reducer";

export const RootReducer = combineReducers({
    portfolio: portfolioReducer
})