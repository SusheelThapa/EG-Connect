/* Importing axios for making HTTP requests*/
import axios from "axios";

/*Define the login function which takes login credentials as an argument*/
export const login = async (login_credential) => {
    /* Using axios to send a POST request to the login API endpoint*/
    /* The credentials are passed in the request body*/
    const { data } = await axios.post("http://localhost:8000/api/login/", login_credential)

    /* Returning the response data*/
    return data
}


