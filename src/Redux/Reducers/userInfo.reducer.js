import {GET_USER_INFO} from "../../Config/types";

const initialState = {
    userInfo: []
}

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {...state, userInfo: action.data}
        default:
            return state
    }
}

export default userInfoReducer