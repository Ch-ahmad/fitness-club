"use client";
import TablePagination from "@/components/Table";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const ClientsTable = () => {
  return (
    <div className="mt-[20px]">
      <h1 className="text-xl font-semibold my-[15px]">Clients</h1>
      <TablePagination
        headers={[
          "Name",
          "Email",
          "Phone",
          "Date of Birth",
          "Status",
          "Action",
        ]}
        data={[
          {
            name: "John Doe",
            email: "qgJfK@example.com",
            phone: "1234567890",
            dob: "01/01/1990",
            status: "Active",
          },
          {
            name: "John Doe",
            email: "qgJfK@example.com",
            phone: "1234567890",
            dob: "01/01/1990",
            status: "Active",
          },
        ]}
        columns={[
          {
            title: "Name",
            render(rowData) {
              return <>{rowData.name}</>;
            },
          },
          {
            title: "Email",
            render(rowData) {
              return <>{rowData.email}</>;
            },
          },
          {
            title: "Phone",
            render(rowData) {
              return <>{rowData.phone}</>;
            },
          },
          {
            title: "Date of Birth",
            render(rowData) {
              return <>{rowData.status}</>;
            },
          },
          {
            title: "Status",
            render(rowData) {
              return <>{rowData.status}</>;
            },
          },
          {
            title: "Action",
            render(rowData) {
              console.log(rowData,"User Table")
              return (
                <Link href={`/trainer/trainees/${rowData?._id}`}>
                  <Eye className="size-5" />
                </Link>
              );
            },
          },
        ]}
      />
    </div>
  );
};

export default ClientsTable;
