import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
})

instance.interceptors.request.use((request) => {
    request.headers.mydata = "Simple"
    return request;
})

export default instance
