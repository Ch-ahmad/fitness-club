import React from "react";

import DashBoardCardCollection from "./dash-card-collection";
import UsersTable from "./users-table";

const AdminDashboardPage = () => {
  return (
    <div className="">
      <div className="mb-[20px]">
        <h1 className="text-primary font-bold text-xl">Admin Dashboard</h1>
      </div>
      <UsersTable />
    </div>
  );
};

export default AdminDashboardPage;
