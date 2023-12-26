import axios from "axios";

export const login = async (login_credential) => {
    const { data } = await axios.post("http://localhost:8000/api/login/", login_credential)
    return data
}
