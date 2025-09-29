import {usersInstance} from "../api.ts";
import {useQuery} from "@tanstack/react-query";

const getAllTeams = async () => {
    return (await usersInstance.get("/team/filter")).data;
};

const getTeamByID = async (id: string) => {
    return (await usersInstance.get(`/team/${id}`,)).data;
};

const deleteTeam = async (id: string) => {
    return (await usersInstance.delete(`/team/${id}`)).data;
}

export const useGetTeamById =  (id: string) => {
    return useQuery({queryKey:['team', id], queryFn: ()=>getTeamByID(id)})
}

export const useGetAllTeams =  () => {
    return useQuery({queryKey:['team'], queryFn: ()=>getAllTeams()})
}

export const useDeleteTeam = (id: string)=>{
    return useQuery({queryKey:['team', id], queryFn: ()=>deleteTeam(id)})
}
