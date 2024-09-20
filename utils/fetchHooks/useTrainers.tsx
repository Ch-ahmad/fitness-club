import type { IUser } from "@/lib/types";
import { useFetch } from "../hooks/useFetch";

const useTrainers = (
  status: "pending" | "active" | "rejected",
  type: "admin" | "public" = "admin"
) => {
  const { response, error, isLoading } = useFetch<IUser[]>({
    path:
      type === "admin"
        ? `admin/trainers-listing?status=${status}`
        : `public/trainers-listing?status=${status}`,
    queryKey: ["trainers-listing", status],
  });
  return { response, error, isLoading };
};

export default useTrainers;
