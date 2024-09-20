"use client";
import {
  Home,
  Package2,
  Settings,
  Dumbbell,
  Users,
  Contact,
} from "lucide-react";

import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const DashBoardSideBar = () => {
  const iconClassName = "size-5 ";
  const pathname = usePathname();
  const sidebar = [
    {
      title: "Dashboard",
      href: "/",
      icon: <Home className={iconClassName} />,
    },
    {
      title: "Coaches",
      href: "/trainer",
      icon: <Users className={iconClassName} />,
    },
    {
      title: "Programs",
      href: "/programs",
      icon: <Dumbbell className={iconClassName} />,
    },
    {
      title: "Users",
      href: "/users",
      icon: <Contact className={iconClassName} />,
    },
  ];
  function isActive(href: string): boolean {
    if (href === "/" && pathname === "/admin") {
      return true;
    }
    return href !== "/" && pathname.includes(`/admin${href}`);
  }
  return (
    <>
      <TooltipProvider>
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-primary/90 sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
            <Link
              href="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-white text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110 text-primary" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {sidebar.map((links, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <Tooltip key={links.title + i}>
                <TooltipTrigger asChild>
                  <Link
                    href={`/admin${links.href}`}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-white hover:text-primary text-white",
                      {
                        "bg-white text-primary": isActive(links.href),
                      }
                    )}
                  >
                    {links.icon}
                    <span className="sr-only">{links.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{links.title}</TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </aside>
      </TooltipProvider>
    </>
  );
};

export default DashBoardSideBar;
