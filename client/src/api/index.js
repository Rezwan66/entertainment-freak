// We are creating an AxiosSecure instance here to use on all api operations

import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

export default axiosSecure;