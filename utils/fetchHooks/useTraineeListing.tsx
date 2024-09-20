import type { IUser } from "@/lib/types";
import { useFetch } from "../hooks/useFetch";

const useTraineesListing = (

) => {
  const { response, error, isLoading } = useFetch<IUser[]>({
    path: `admin/trainees-listing`,
    queryKey: ["trainees-listing"],
  });
  return { response, error, isLoading };
};

export default useTraineesListing;
