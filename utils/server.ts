import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/api",
    headers: {
        "Content-type": "application/json",
    },
});

export default apiClient;
