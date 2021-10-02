import * as types from "../../Config/types"
import * as api from "../../Api/api"


export const setAboutMe = (info) => ({type: types.GET_ABOUT_ME_DATA, data: info})
export const setIsEntered = (isEntered) => ({type: types.SET_IS_ENTERED, data: isEntered})


export const setAboutMeData = () => {
    return dispatch => {
        return api.getAboutMeData()
            .then(response => {
                dispatch(setAboutMe(response.data[0]))
            })
            .catch(error => Promise.reject(error))
    }
}