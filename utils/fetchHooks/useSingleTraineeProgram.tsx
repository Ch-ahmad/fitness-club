import type { ITraineeProgram } from "@/lib/types";
import { useFetch } from "../hooks/useFetch";

const useSingleTraineeProgram = (id: string) => {
	const { error, isLoading, refetch, status, response } =
		useFetch<ITraineeProgram>({
			path: `trainee/program-details/${id}`,
			queryKey: ["single-trainee-program", id],
		});
	return {
		error,
		isLoading,
		refetch,
		status,
		response,
	};
};

export default useSingleTraineeProgram;
