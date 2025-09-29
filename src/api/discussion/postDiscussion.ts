import {AxiosRequestConfig} from "axios";
import {usersInstance} from "../api.ts";
import {useMutation} from "@tanstack/react-query";

const postComment = async (id: string, data: AxiosRequestConfig<any> | undefined) => {
    return (await usersInstance.post(`/discussion/${id}`,data)).data;
};

export const usePostComment = (id: string, data: any)=>{
    return useMutation({
        mutationFn: ()=> postComment(id,data),
        mutationKey:['discussion']
    })
}