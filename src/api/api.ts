import axios from "axios";

export const usersInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: {
        "x-platform": "mashbak-app",
    },
});