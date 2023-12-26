import axios from "axios";

import Cookies from "js-cookie"

export const getPolicy = async () => {
    const { data } = await axios.get("http://localhost:8000/api/policies/",{headers:{Authorization:`Bearer ${Cookies.get("access_token")}`}})
    return data
}