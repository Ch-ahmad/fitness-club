"use client";
import React from "react";
import PlanSingleDay from "./single-day";
import { useParams } from "next/navigation";
import useSingleTraineeProgram from "@/utils/fetchHooks/useSingleTraineeProgram";

const ProgramLandingPage = () => {
	const { programId } = useParams();
	const { isLoading, response } = useSingleTraineeProgram(programId as string);
	if (isLoading) {
		return <>loading.....</>;
	}

	return (
		<section className="space-y-[15px] my-[30px]">
			<div className="flex items-center justify-between">
				<div className="w-[80%]">
					<h1 className="text-xl font-semibold">{response.name}</h1>
					<p className="w-full md:w-[69%]">{response.description}</p>
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
