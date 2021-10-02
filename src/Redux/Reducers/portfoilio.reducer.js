import {GET_ABOUT_ME_DATA, SET_IS_ENTERED} from "../../Config/types";

const initialState = {
    isEntered: false,
    aboutMe: [],
}

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ABOUT_ME_DATA:
            return {...state, aboutMe: action.data}
        case SET_IS_ENTERED:
            return {...state, isEntered: action.data}
        default:
            return state
    }
}

export default portfolioReducer