import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required!").email(),
  password: z.string().min(1, "Password is required!"),
});
export const traineeSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(1, "Password is required"),
  role: z.enum(["trainee"]).default("trainee"),
});
export const trainerSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(1, "Password is required"),
  role: z.enum(["trainer"]).default("trainer"),
});
