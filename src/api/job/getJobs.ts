import {usersInstance} from "../api.ts";
import {useQuery} from "@tanstack/react-query";

const getAllJobs = async () => {
    return (await usersInstance.get("/jobs/filter")).data;
};

const getJobByID = async (id: string) => {
    return (await usersInstance.get(`/jobs/${id}`,)).data;
};

export const useGetJobById =  (id: string) => {
    return useQuery({queryKey:['event', id], queryFn: ()=>getJobByID(id)})
}

export const useGetAllJobs =  () => {
    return useQuery({queryKey:['event'], queryFn: ()=>getAllJobs()})
}