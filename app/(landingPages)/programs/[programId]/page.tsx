"use client";
import React from "react";
import PlanSingleDay from "./single-day";
import useSingleProgram from "@/utils/fetchHooks/useSingleProgram";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/provider/Auth";
import useToast from "@/utils/hooks/useToast";
import useApiRequest from "@/utils/hooks/useApiRequest";
import { useRouter } from "next/navigation";

const ProgramLandingPage = () => {
	const { programId } = useParams();
	const { role } = useAuth();
	const { isLoading, response } = useSingleProgram(programId as string);
	const { toastError } = useToast();
	const router = useRouter();
	const { mutationFunction } = useApiRequest();
	if (isLoading) {
		return <>loading.....</>;
	}
	const onHandleGet = () => {
		if (role !== "trainee") {
			toastError("Only trainee can get this program");
			return;
		}
		mutationFunction({
			path: `trainee/book-program/${programId}`,
			data: {},
			callback(res) {
				router.push("/trainee");
			},
		});
	};
	return (
		<section className="space-y-[15px] my-[30px]">
			<div className="flex items-center justify-between">
				<div className="w-[80%]">
					<h1 className="text-xl font-semibold">{response.name}</h1>
					<p className="w-full md:w-[69%]">{response.description}</p>
				</div>
				<div>
					<Button onClick={onHandleGet}>Get this Program</Button>
				</div>
			</div>
			<main className="w-full flex flex-wrap gap-[5px]">
				{response?.days?.map((day) => (
					<PlanSingleDay key={day._id} {...day} />
				))}
			</main>
		</section>
	);
};

export default ProgramLandingPage;
