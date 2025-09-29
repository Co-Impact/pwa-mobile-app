import {usersInstance} from "../api.ts";
import {useQuery} from "@tanstack/react-query";

const getAllDiscussion = async () => {
    return (await usersInstance.get("/discussion/filter")).data;
};

const getDiscussionByID = async (id: string) => {
    return (await usersInstance.get(`/discussion/${id}`,)).data;
};

export const useGetDiscussionById =  (id: string) => {
    return useQuery({queryKey:['discussion', id], queryFn: ()=>getDiscussionByID(id)})
}

export const useGetAllDiscussions =  () => {
    return useQuery({queryKey:['discussion'], queryFn: ()=>getAllDiscussion()})
}