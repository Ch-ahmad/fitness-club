import { useFetch } from "../hooks/useFetch";
import type { ITraineeProgram } from "@/lib/types";

const useTraineePrograms = () => {
	const { error, isLoading, refetch, response } = useFetch<ITraineeProgram[]>({
		path: "trainee/programs",
		queryKey: ["trainee-programs"],
	});
	return {
		error,
		isLoading,
		refetch,
		response,
	};
};

export default useTraineePrograms;
