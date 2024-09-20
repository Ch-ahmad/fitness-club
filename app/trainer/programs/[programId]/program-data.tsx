"use client";
import React from "react";
import PlanSingleDay from "./single-day";
import useSingleProgram from "@/utils/fetchHooks/useSingleProgram";
import AddNewDayProgram from "./add-new-day";

const ProgramsData = ({ programId }: { programId: string }) => {
	const { isLoading, response, refetch } = useSingleProgram(programId);
	if (isLoading) return <>Loading....</>;
	return (
		<>
			<div>
				<h1 className="text-xl font-semibold">{response.name}</h1>
				<p>{response.description}</p>
			</div>
			<main className="w-full flex flex-wrap gap-[5px]">
				{response.days.map((day) => (
					<PlanSingleDay key={day._id} {...day} refetch={refetch} />
				))}
				<AddNewDayProgram refetch={refetch} />
			</main>
		</>
	);
};

export default ProgramsData;
