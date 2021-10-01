import axios from "axios"
import {GET_USER_INFO} from "../Config/urls";

export const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${GET_USER_INFO}`)
            .then(response => {
                console.log(response)
                resolve(response)
            })
            .catch(error => reject(error))
    })
}