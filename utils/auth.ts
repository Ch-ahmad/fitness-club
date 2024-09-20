"use server";
import axios from "axios";
import { cookies } from "next/headers";
type userRoles = "admin" | "trainee" | "trainer";
type UserPayload = {
	token: string;
	role: userRoles;
};

export async function getSession() {
	try {
		const session = cookies().get("session")?.value;
		if (!session) return null;
		return (await JSON.parse(session)) as UserPayload;
	} catch (error) {
		await fetch("/api/auth", {
			method: "DELETE",
		});
		throw new Error("Failed to get session");
	}
}
