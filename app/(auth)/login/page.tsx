"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { loginSchema } from "@/utils/schema/auth";
import useApiRequest from "@/utils/hooks/useApiRequest";
import { useAuth } from "@/provider/Auth";
type formType = z.infer<typeof loginSchema>;
export default function LoginForm() {
  const router = useRouter();
  const { addCookies } = useAuth();
  const { mutationFunction, isPending } = useApiRequest<formType>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: formType) => {
    mutationFunction({
      path: "auth/login",
      data,
      async callback(res) {
        const role = res?.data?.data?.role;
        const token = res?.data?.data?.token;
        await addCookies(token, role);
        if (role === "/trainee") {
          router.push("/");
        } else {
          router.push(`/${role}`);
        }
      },
    });
  };
  return (
    <>
      <Card className="mx-auto max-w-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl">Log in</CardTitle>
          <CardDescription>
            Enter your information to login into your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset
              disabled={isPending}
              className="grid gap-4"
            >
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                  error={errors.email?.message}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  error={errors.password?.message}
                  {...register("password")}
                  placeholder="Password"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
              >
                Login
              </Button>
            </fieldset>
          </form>
          <div className="mt-4 text-center text-sm">
            Don`t Have Account?{" "}
            <Link
              href="/signup"
              className="underline"
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
