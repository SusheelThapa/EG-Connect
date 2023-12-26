import axios from "axios";

export const getPetition = async () => {
    const { data } = await axios.get("http://localhost:8000/api/petition/")
    return data
}