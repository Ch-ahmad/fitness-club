import { Plus } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import useApiRequest from "@/utils/hooks/useApiRequest";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
const AddNewDayProgram = ({ refetch }: { refetch: () => void }) => {
	const { programId } = useParams();
	const { mutationFunction, isPending } = useApiRequest({
		method: "put",
	});
	const handleAddNewDay = () => {
		if (isPending) return;
		mutationFunction({
			path: `trainer/add-day/${programId}`,
			data: {
				daysCount: 1,
			},
			callback: () => {
				refetch();
			},
		});
	};
	return (
		<div className="border border-primary/40 h-[400px] rounded w-[24%] flex items-center justify-center">
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className={cn("flex flex-col w-full items-center justify-center", {
					"opacity-35 cursor-not-allowed": isPending,
				})}
				onClick={handleAddNewDay}
			>
				<Plus className="size-5 cursor-pointer" />
				<Button variant="link" className="-mt-[10px]">
					Add New Day
				</Button>
			</div>
		</div>
	);
};

export default AddNewDayProgram;
