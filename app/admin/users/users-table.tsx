"use client";
import TablePagination from "@/components/Table";
import { Badge } from "@/components/ui/badge";
import useTraineesListing from "@/utils/fetchHooks/useTraineeListing";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const UsersAdminTable = () => {
  const { error,isLoading,response} = useTraineesListing()
  return (
    <TablePagination
      headers={["Name", "Email", "Status", "Action"]}
      data={response}
      isLoading={ isLoading}
      columns={[
        {
          title: "Name",
          render: (rowData) => rowData.first_name + " " + rowData.last_name,
        },
        {
          title: "Email",
          render: (rowData) => rowData.email,
        },
        {
          title: "Status",
          render: (rowData) => <Badge variant={rowData.status === "rejected" ?"destructive" :"default"}>{ rowData.status}</Badge>,
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

export default UsersAdminTable;
