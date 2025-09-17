import { useMutation } from "@tanstack/react-query";
import type { ITwoFactorParams, TwoFAResponset } from "./types";
import { usersInstance } from "../api";
import { toast } from "react-toastify";


const sendCode = async (data: ITwoFactorParams): Promise<TwoFAResponset> => {
  return (await usersInstance.post("/auth/valid-tfa", data)).data;
};

export const useSendCode = () => {
  return useMutation({
    mutationFn: (data: ITwoFactorParams) => sendCode(data),
    onSuccess: (data, variables) => {
      toast.success('OTP sent successfuly')
      console.log({ otp: data.secret })
      alert(`OTP sent to ${variables.value}: ${data?.secret}`);
    },
    onError: (error) => {
      toast.error(`Error sending OTP: ${error.message}`);
    },
  });
};


const validateCode = async (data: ITwoFactorParams) => {
  return (await usersInstance.post("/auth/valid-code", data)).data;
};

export const useValidateCode = () => {
  return useMutation({
    mutationFn: (data: ITwoFactorParams) => validateCode(data),
    onSuccess: () => {
      toast.success('OTP verified successfuly')
    },
    onError: (error) => {
      toast.error(`Error verifing OTP: ${error.message}`);
    },
  });
};