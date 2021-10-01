import {applyMiddleware, compose, createStore} from "redux";
import ReduxThunk from "redux-thunk"
import {RootReducer} from "./Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
)