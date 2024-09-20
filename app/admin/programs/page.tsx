import React from "react";
import ProgramsTable from "./programs-table";

const AdminProgramsPage = () => {
  return (
    <section>
      <h1 className="text-primary text-xl font-bold mb-[20px]">Programs</h1>
      <ProgramsTable />
    </section>
  );
};

export default AdminProgramsPage;
