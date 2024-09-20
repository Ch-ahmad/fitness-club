"use client";
import TablePagination from "@/components/Table";
import usePrograms from "@/utils/fetchHooks/usePrograms";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProgramsTable = () => {
  const { response,isLoading} = usePrograms()
  return (
    <TablePagination
       headers={["Name", "Description", "Days", "Action"]}
      data={response}
      isLoading={isLoading}
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
                    <Link href={`/admin/programs/${rowData._id}`}>
                      <Eye className="size-5" />
                    </Link>
                  </>
                );
              },
            },
          ]}
    />
  );
};

export default ProgramsTable;
