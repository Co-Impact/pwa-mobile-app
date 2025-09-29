import {AxiosRequestConfig} from "axios";
import {usersInstance} from "../api.ts";
import {useMutation} from "@tanstack/react-query";

const submitJob = async (id: string, data: AxiosRequestConfig<any> | undefined) => {
    return (await usersInstance.post(`/jobs/${id}`,data)).data;
};

export const useSubmitJob = (id: string, data: any)=>{
    return useMutation({
        mutationFn: ()=> submitJob(id,data),
        mutationKey:['jobs']
    })
}