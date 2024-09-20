import React from "react";
import DashBoarCard from "./components/dash-card";

const DashBoardCardCollection = () => {
  return (
    <div className="flex  gap-[20px] flex-wrap">
      <DashBoarCard />
      <DashBoarCard />
      <DashBoarCard />
    </div>
  );
};

export default DashBoardCardCollection;
