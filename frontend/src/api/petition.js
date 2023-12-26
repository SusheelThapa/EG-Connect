/* Importing axios for HTTP requests and Cookies for handling browser cookies*/
import axios from "axios";

import Cookies from "js-cookie"


/* Function to get all petitions*/
export const getPetition = async () => {
    /* Using axios to send a GET request to the petitions API endpoint*/
    /* Authorization header is set using the access token stored in cookies*/
    const { data } = await axios.get("http://localhost:8000/api/petition/", { headers: { Authorization: `Bearer ${Cookies.get("access_token")}` } })

    /*Returning the received data*/
    return data
}