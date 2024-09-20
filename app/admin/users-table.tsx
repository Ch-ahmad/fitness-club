import React from "react";
import PendingCoachTables from "./trainer/pending-coach";

const UsersTable = () => {
  return (
    <div className="my-[20px]">
      <h1 className="text-xl font-bold mb-[30px] ">Trainers Requests</h1>
      <PendingCoachTables />
    </div>
  );
};

export default UsersTable;
