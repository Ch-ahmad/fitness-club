"use client";
import ProgramTable from "./programs/programs-table";
export default function Dashboard() {
  return (
    <>
      <div className="mb-[20px]">
        <h1 className="text-primary font-bold text-xl">Trainer Dashboard</h1>
      </div>
      <ProgramTable />
    </>
  );
}
