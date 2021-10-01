import axios from "axios"
import * as urls from "../Config/urls"

export const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${urls.GET_USER_INFO}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}