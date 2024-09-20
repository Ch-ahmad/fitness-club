import React, { type ReactNode } from "react";
import DashBoardSideBar from "./components/DashBoardSideBar";
import Topbar from "./components/Topbar";
import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";
const AdminRootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  if (session.role !== "admin") {
    redirect(`${session.role}`);
  }
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden">
      <DashBoardSideBar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Topbar />
        <div className="p-4 sm:px-6 sm:py-0 ">{children}</div>
      </div>
    </div>
  );
};

export default AdminRootLayout;
