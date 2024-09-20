import React from "react";
import DashBoardCardCollection from "../admin/dash-card-collection";
import ProgramTable from "./programs-table";

const TraineeLandingPage = () => {
	return (
		<main>
			
			{/* <DashBoardCardCollection /> */}
			<div className="mt-[50px]">
				<ProgramTable />
			</div>
		</main>
	);
};

export default TraineeLandingPage;
