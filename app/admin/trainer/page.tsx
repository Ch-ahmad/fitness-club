import React from "react";
import CoachesTable from "./coach-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PendingCoachTables from "./pending-coach";
const AdminCoachesPages = () => {
  return (
    <div>
      <Tabs
        defaultValue="approved"
        className="w-full flex flex-col"
      >
        <div className="w-full flex items-center justify-between">
          <h2 className="text-lg font-semibold my-[15px]">Coaches</h2>

          <TabsList className="">
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="approved"
          className="col-span-2"
        >
          <CoachesTable status="active" />
        </TabsContent>
        <TabsContent
          value="rejected"
          className="col-span-2"
        >
          <CoachesTable status="rejected" />
        </TabsContent>
        <TabsContent
          value="pending"
          className="col-span-2"
        >
          <PendingCoachTables />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminCoachesPages;
