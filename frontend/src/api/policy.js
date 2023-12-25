import axios from "axios";

export const getPolicy = async () => {
    const { data } = await axios.get("http://localhost:8000/api/policies/")
    return data
}