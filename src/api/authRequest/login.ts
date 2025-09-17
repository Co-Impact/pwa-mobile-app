import {useMutation} from "@tanstack/react-query";
import {usersInstance} from "../api";

const userLogin = async (data: { email: string; password: string }) => {
    return (await usersInstance.post("/auth/login", data)).data;
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