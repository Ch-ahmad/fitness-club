"use client";
import TablePagination from "@/components/Table";
import useMe from "@/utils/fetchHooks/useMe";
import useTraineePrograms from "@/utils/fetchHooks/useTraineePrograms";
import { Eye } from "lucide-react";
import Link from "next/link";
const ProgramTable = () => {
	const { response, isLoading: isAuth } = useMe();
	const { isLoading, response: programs, refetch } = useTraineePrograms();
	return (
		<>
			<div className="w-full">
				<h2 className="font-bold text-xl">Programs</h2>
				<TablePagination
					isLoading={isLoading || isAuth}
					headers={["Name", "Description", "Days", "Action"]}
					data={programs}
					columns={[
						{
							title: "Name",
							render(rowData) {
								return <>{rowData.name}</>;
							},
						},
						{
							title: "Description",
							render(rowData) {
								return <>{rowData.description}</>;
							},
						},
						{
							title: "Days",
							render(rowData) {
								return <>{rowData?.days?.length}</>;
							},
						},
						{
							title: "Action",
							render(rowData) {
								return (
									<>
										<Link href={`/trainee/programs/${rowData._id}`}>
											
											<Eye className="size-5" />
										</Link>
									</>
								);
							},
						},
					]}
				/>
			</div>
		</>
	);
};

export default ProgramTable;
