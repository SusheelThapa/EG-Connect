import axios from "axios";

export const getNotices = async () => {
    const { data } = await axios.get("http://localhost:8000/api/notices/")
    return data
}
export const getNotice = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/api/notices/${id}`)
    return data;
}