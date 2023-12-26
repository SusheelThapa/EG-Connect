import axios from "axios";
import Cookies from "js-cookie"

export const getNotices = async () => {
    const { data } = await axios.get("http://localhost:8000/api/notices/", { headers: { Authorization: `Bearer ${Cookies.get("access_token")}` } })
    return data
}
export const getNotice = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/api/notices/${id}`, { headers: { Authorization: `Bearer ${Cookies.get("access_token")}` } })
    return data;
}