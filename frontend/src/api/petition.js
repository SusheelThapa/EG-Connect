import axios from "axios";

import Cookies from "js-cookie"


export const getPetition = async () => {
    const { data } = await axios.get("http://localhost:8000/api/petition/", { headers: { Authorization: `Bearer ${Cookies.get("access_token")}` } })
    return data
}