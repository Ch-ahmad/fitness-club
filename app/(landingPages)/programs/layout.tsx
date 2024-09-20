import Link from "next/link";
import React, { type ReactNode } from "react";
import { DumbbellIcon } from "../components/Header";

const ProgramLandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full flex flex-col relative px-4 md:px-6">
      {children}
    </main>
  );
};

export default ProgramLandingLayout;
