import {useMutation} from "@tanstack/react-query";
import type {ITwoFactorParams, TwoFAResponset} from "./types";
import {usersInstance} from "../api";


const sendCode = async (data: ITwoFactorParams): Promise<TwoFAResponset> => {
  return (await usersInstance.post("/auth/valid-tfa", data)).data;
};

export const useSendCode = () => {
  return useMutation({
    mutationFn: (data: ITwoFactorParams) => sendCode(data),
  });
};


const validateCode = async (data: ITwoFactorParams) => {
  return (await usersInstance.post("/auth/valid-code", data)).data;
};

export const useValidateCode = () => {
  return useMutation({
    mutationFn: (data: ITwoFactorParams) => validateCode(data),
  });
};