import {AxiosRequestConfig} from "axios";
import {usersInstance} from "../api.ts";
import {useMutation} from "@tanstack/react-query";

const submitEvent = async (id: string, data: AxiosRequestConfig<any> | undefined) => {
    return (await usersInstance.post(`/event/${id}`,data)).data;
};

export const useSubmitEvent = (id: string, data: any)=>{
    return useMutation({
        mutationFn: ()=> submitEvent(id,data),
        mutationKey:['event']
    })
}