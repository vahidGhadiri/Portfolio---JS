import * as types from "../../Config/types"
import * as api from "../../Api/api"


export const setUser = (userInfo = []) => ({type: types.GET_USER_INFO, data: userInfo})

export const setUserInfo = () => {
    return dispatch => {
        return api.getUserInfo()
            .then(response => {
                dispatch(setUser(response))
                return response
            })
            .catch(error => Promise.reject(error))
    }
}