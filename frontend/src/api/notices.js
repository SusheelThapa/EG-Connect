/* Importing axios for HTTP requests and Cookies for handling browser cookies*/

import axios from "axios";
import Cookies from "js-cookie"

/*Function to get all notices*/
export const getNotices = async () => {
    /* Using axios to send a GET request to the notices API endpoint*/
    /* Authorization header is set using the access token stored in cookies*/
    const { data } = await axios.get("http://localhost:8000/api/notices/", { headers: { Authorization: `Bearer ${Cookies.get("access_token")}` } })

    /*Returning the received data*/
    return data
}

/*Function to get a specific notice by its ID*/
export const getNotice = async (id) => {
    /* Using axios to send a GET request to a specific notice's API endpoint*/
    /* Authorization header is set using the access token stored in cookies*/

    const { data } = await axios.get(`http://localhost:8000/api/notices/${id}`, { headers: { Authorization: `Bearer ${Cookies.get("access_token")}` } })

    /*Returning the received data*/
    return data;
}