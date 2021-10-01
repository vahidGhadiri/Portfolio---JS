import axios from "axios"
import * as urls from "../Config/urls"

export const getAboutMeData = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${urls.GET_ABOUT_ME_DATA}`, {
            headers: {
                'Content-Type': 'text/plain'
            }
        })
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}