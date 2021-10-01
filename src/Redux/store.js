import {applyMiddleware, createStore} from "redux";
import ReduxThunk from "redux-thunk"
import {RootReducer} from "./Reducers";

export const store = createStore(RootReducer, applyMiddleware(ReduxThunk))