import React from "react";
import ProgramTable from "../programs-table";

const TraineeProgram = () => {
	return (
		<main>
			<div className="mb-[20px]">
				<h1 className="text-primary font-bold text-xl"> Programs</h1>
			</div>

			<div className="mt-[50px]">
				<ProgramTable />
			</div>
		</main>
	);
};

export default TraineeProgram;
