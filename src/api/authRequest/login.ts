import {useMutation} from "@tanstack/react-query";
import {usersInstance} from "../api";
import axios from "axios";

const LINKEDIN_CLIENT_ID = '77vtfcj5l2zb9b'; // Public
const REDIRECT_URI = 'https://your-server.com/api/auth/linkedin/callback';
const SCOPE = 'r_liteprofile r_emailaddress'; // permissions
const STATE = 'random_string_to_prevent_csrf'; // Generate a real random one!

const linkedinAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${STATE}&scope=${encodeURIComponent(SCOPE)}`;

const userLogin = async (data: { email: string; password: string }) => {
    return (await usersInstance.post("/auth/login", data)).data;
}

const linkedInLogin = async () => {
    return (await axios.get(linkedinAuthUrl)).data;
}

export const useUserLogin = (onLoginSuccess: (data: any) => void) => {
    return useMutation({
        mutationKey: ["user-login"],
        mutationFn: (data: { email: string; password: string }) => userLogin(data),
        onSuccess: (data) => {
            onLoginSuccess(data)
        },
    });
}

export const useLinkedInLogin = () => {
    return useMutation({
        mutationKey: ["linkedin-login"],
        mutationFn: () => linkedInLogin(),
    });
}