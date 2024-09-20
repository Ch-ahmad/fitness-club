"use client";
import TablePagination from "@/components/Table";
import { Badge } from "@/components/ui/badge";
import useTrainerUser from "@/utils/fetchHooks/useTrainerUser";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const TrainerTraineeTable = () => {
  const { isLoading,response} = useTrainerUser()
  return (
    <TablePagination
      headers={["Name", "Email", "Action"]}
      data={response?.trainees}
      isLoading={ isLoading}
      columns={[
        {
          title: "Name",
          render: (rowData) => rowData.userId.first_name + " " + rowData.userId.last_name,
        },
        {
          title: "Email",
          render: (rowData) => rowData.userId.email,
        },
        {
          title: "Action",
          className: "align-middle",
          render: (rowData) => (
            <div className="space-x-[10px]">
              <Link href={"#"}>
                <Eye className="size-5" />
              </Link>
            </div>
          ),
        },
      ]}
    />
  );
};

export default TrainerTraineeTable;
