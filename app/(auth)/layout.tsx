import Link from "next/link";
import type { ReactNode } from "react";
import { DumbbellIcon } from "../(landingPages)/components/Header";
import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";
const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getSession();
  if (session) {
    redirect(`/${session.role}`);
  }
  return (
    <div className="relative  overflow-y-auto h-screen">
      <>
        <Link
          className="flex items-center gap-2 sticky top-[10px] left-[20px] mt-[10px] ml-[20px]"
          href="/"
        >
          <DumbbellIcon className="h-6 w-6 text-primary-500" />
          <span className="text-lg font-bold tracking-tight">Fitness Hub</span>
        </Link>
      </>
      <div className="h-[85%] w-full flex items-center justify-center px-[10px] md:px-0 my-[20px]">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
