import { useMutation } from "@tanstack/react-query";
import { createUserMutationFn, loginUserMutationFn } from "./auth";

export const useCreateUserMutation = () => {
  const {mutateAsync, isPending} = useMutation({
    mutationKey: ["auth"],
    mutationFn: createUserMutationFn,
  });

  return {
    mutateAsync,
    isPending
  }

};

export const useLoginUserMutation = () => {
  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['auth'],
    mutationFn: loginUserMutationFn,
  });
  return {
    mutateAsync,
    isPending
  }
}
