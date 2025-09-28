import {usersInstance} from "../api.ts";
import {useQuery} from "@tanstack/react-query";

const getAllEvents = async () => {
    return (await usersInstance.get("/event/filter")).data;
};

const getEventByID = async (id: string) => {
    return (await usersInstance.get(`/event/${id}`,)).data;
};

export const useGetEventById =  (id: string) => {
    return useQuery({queryKey:['event', id], queryFn: ()=>getEventByID(id)})
}

export const useGetAllEvents =  () => {
    return useQuery({queryKey:['event'], queryFn: ()=>getAllEvents()})
}