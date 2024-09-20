"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/provider/Auth";
import { User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuLabel,
	DropdownMenuContent,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useMe from "@/utils/fetchHooks/useMe";
import { IMG_URL } from "@/utils/constants";

export default function LandingHeader() {
	const pathname = usePathname();
	const { token } = useAuth();
	const { response } = useMe();
	const links: { title: string; href: string }[] = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Programs",
			href: "/programs",
		},
		{
			title: "Trainers",
			href: "/trainers",
		},
	];
	function isActive(href: string): boolean {
		if (href === "/" && pathname === "/") {
			return true;
		}
		return href !== "/" && pathname.includes(href);
	}
	const ProfileImageURL = IMG_URL + response?.profile_image;
	return (
		<header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-900">
			<div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
				<Link className="flex items-center gap-2" href="/">
					<DumbbellIcon className="h-6 w-6 text-primary-500" />
					<span className="text-lg font-bold tracking-tight">Fitness Hub</span>
				</Link>
				<nav className="hidden items-center gap-6 md:flex">
					{links.map((link, i) => (
						<Link
							className={cn(
								"text-sm font-medium text-primary hover:text-primary/50",
								{
									"text-primary/50": isActive(link.href),
								},
							)}
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i + link.title}
							href={link.href}
						>
							{link.title}
						</Link>
					))}
				</nav>
				{token ? (
					<ProfileDropdown src={ProfileImageURL} />
				) : (
					<Button asChild>
						<Link href="/login">Get Started</Link>
					</Button>
				)}
			</div>
		</header>
	);
}

function ProfileDropdown({ src }: { src: string }) {
	const { role, removeCookies } = useAuth();
	const router = useRouter();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="overflow-hidden rounded-full"
				>
					<Avatar>
						<AvatarImage
							src={src}
							className="overflow-hidden size-full rounded-full"
							alt="Profile DP"
						/>
						<AvatarFallback>DP</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={() => {
						router.push(`/${role}`);
					}}
				>
					Dashboard
				</DropdownMenuItem>
				<DropdownMenuItem onClick={removeCookies}>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export function DumbbellIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m6.5 6.5 11 11" />
			<path d="m21 21-1-1" />
			<path d="m3 3 1 1" />
			<path d="m18 22 4-4" />
			<path d="m2 6 4-4" />
			<path d="m3 10 7-7" />
			<path d="m14 21 7-7" />
		</svg>
	);
}
