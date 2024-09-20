"use client";
import TablePagination from "@/components/Table";
import { Button } from "@/components/ui/button";
import useTrainers from "@/utils/fetchHooks/useTrainers";
import { Badge } from "@/components/ui/badge";
import useApiRequest from "@/utils/hooks/useApiRequest";
import { useQueryClient } from "@tanstack/react-query";

const PendingCoachTables = () => {
  const { response, isLoading } = useTrainers("pending");
  const queryClient = useQueryClient();
  const { isPending, mutationFunction } = useApiRequest({
    method: "put",
  });
  const onSubmitStatus = (status: "active" | "rejected", id: string) => {
    mutationFunction({
      path: `auth/approve/${id}`,
      data: { status },
      callback: () => {
        queryClient.invalidateQueries({
          queryKey: ["trainers-listing", "pending"],
        });
      },
    });
  };
  return (
    <TablePagination
      headers={["First Name", "LastName", "Phone", "Status", "Action"]}
      isLoading={isLoading}
      data={response}
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
            <Badge variant={"secondary"}>{rowData.status}</Badge>
          ),
        },

        {
          title: "Action",
          className: "align-middle",
          render: (rowData) => (
            <div className="space-x-[10px]">
              <Button
                variant={"outline"}
                className="h-6"
                size={"sm"}
                disabled={isPending}
                onClick={() => onSubmitStatus("active", rowData._id)}
              >
                Approve
              </Button>
              <Button
                variant={"destructive"}
                className="h-6"
                size={"sm"}
                disabled={isPending}
                onClick={() => onSubmitStatus("rejected", rowData._id)}
              >
                Reject
              </Button>
            </div>
          ),
        },
      ]}
    />
  );
};

export default PendingCoachTables;
