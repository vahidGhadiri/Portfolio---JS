import {GET_ABOUT_ME_DATA} from "../../Config/types";

const initialState = {
    aboutMe: []
}

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ABOUT_ME_DATA:
            return {...state, aboutMe: action.data}
        default:
            return state
    }
}

export default portfolioReducer