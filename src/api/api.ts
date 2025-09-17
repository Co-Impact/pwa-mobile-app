import axios from "axios";

export const usersInstance = axios.create({
    baseURL: import.meta.env.VITE_USER_URL,
    headers: {
        "x-platform": "mashbak-app",
    },
});