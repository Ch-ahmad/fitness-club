import { useFetch } from "../hooks/useFetch";
import type { IUser } from "@/lib/types";

const useSingleTrainer = (id: string) => {
  const { response, isLoading } = useFetch<IUser>({
    path: `public/trainer-details/${id}`,
    queryKey: ["single-trainer", id],
    config: {
      enabled: !!id,
    },
  });
  return {
    response,
    isLoading,
  };
};

export default useSingleTrainer;
