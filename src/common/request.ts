import axios from "axios";

const request = axios.create({
    baseURL: "/api",
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default request