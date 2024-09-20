"use client";

import TablePagination from "@/components/Table";
import useMe from "@/utils/fetchHooks/useMe";
import useTrainerPrograms from "@/utils/fetchHooks/useTrainerPrograms";
import { Eye } from "lucide-react";
import Link from "next/link";
import AddProgramModal from "./add-program";
const ProgramTable = () => {
  const { response, isLoading: isAuth } = useMe();
  const {
    isLoading,
    response: programs,
    refetch,
  } = useTrainerPrograms(response?._id);
  return (
    <>
      <div className="flex  w-full justify-end">
        <AddProgramModal refetch={refetch} />
      </div>
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
                    <Link href={`/trainer/programs/${rowData._id}`}>
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
