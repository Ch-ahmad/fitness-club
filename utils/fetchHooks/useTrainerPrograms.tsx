import { useFetch } from "../hooks/useFetch";
import type { IProgram } from "@/lib/types";
const useTrainerPrograms = (id: string) => {
  const { response, isLoading, refetch } = useFetch<IProgram[]>({
    path: `public/trainer-programs/${id}`,
    queryKey: ["trainer-programs", id],
    config: {
      enabled: !!id,
    },
  });
  return {
    response,
    isLoading,
    refetch,
  };
};
export default useTrainerPrograms;
