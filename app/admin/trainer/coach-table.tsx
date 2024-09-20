"use client";
import TablePagination from "@/components/Table";
import { Badge } from "@/components/ui/badge";
import useTrainers from "@/utils/fetchHooks/useTrainers";
import { Eye } from "lucide-react";
import Link from "next/link";
const CoachesTable = ({ status }: { status: "active" | "rejected" }) => {
  const { response, error, isLoading } = useTrainers(status);
  return (
    <>
      <TablePagination
        headers={["First Name", "Last Name", "Email", "Status", "Action"]}
        data={response}
        isLoading={isLoading}
        columns={[
          {
            title: "Name",
            render: (rowData) => rowData.first_name,
          },
          {
            title: "Email",
            render: (rowData) => rowData.last_name,
          },
          {
            title: "Phone",
            render: (rowData) => rowData.email,
          },
          {
            title: "Status",
            render: (rowData) => (
              <Badge
                variant={status === "rejected" ? "destructive" : "default"}
              >
                {rowData.status}
              </Badge>
            ),
          },
          {
            title: "Action",
            render: (rowData) => (
              <>
                <Link href={`/admin/trainer/${rowData._id}`}>
                  <Eye className="size-5" />
                </Link>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default CoachesTable;
