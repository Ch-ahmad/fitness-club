import { useFetch } from "../hooks/useFetch";
import type { IProgram } from "@/lib/types";
const useSingleProgram = (id: string) => {
  const { isLoading, response, refetch } = useFetch<IProgram>({
    path: `public/program-details/${id}`,
    queryKey: ["single-program", id],
    config: {
      enabled: !!id,
    },
  });
  return { response, isLoading, refetch };
};
export default useSingleProgram;
