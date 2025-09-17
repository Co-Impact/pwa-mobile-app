import {usersInstance} from "../api";
import {useMutation} from "@tanstack/react-query";


const createUser = async (data: any) => {
  return (await usersInstance.post("/auth/signup", data)).data;
};

export const useCreateAccount = () => {
  return useMutation({
    mutationKey: ["create-account"],
    mutationFn: (data: any) => createUser(data),
  });
};