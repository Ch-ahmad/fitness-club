import type { IProgram } from "@/lib/types";
import { useFetch } from "../hooks/useFetch";

const usePrograms = () => {
  const { isLoading, response } = useFetch<IProgram[]>({
    path: "public/programs-listing",
    queryKey: ["programs-listing"],
  });
  return {
    isLoading,
    response,
  };
};

export default usePrograms;
