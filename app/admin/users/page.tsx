import React from "react";
import UsersAdminTable from "./users-table";

const UsersAdminPage = () => {
  return (
    <section>
      <h1 className="text-primary text-xl font-bold mb-[20px]">Clients</h1>
      <UsersAdminTable />
    </section>
  );
};

export default UsersAdminPage;
