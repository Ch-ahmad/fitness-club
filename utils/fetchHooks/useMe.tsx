import type { IUser } from "@/lib/types";
import { useFetch } from "../hooks/useFetch";

const useMe = () => {
  const { error, isLoading, response, refetch } = useFetch<IUser>({
    path: "auth/profile",
    queryKey: ["me"],
  });
  return {
    error,
    isLoading,
    response,
    refetch,
  };
};

export default useMe;
