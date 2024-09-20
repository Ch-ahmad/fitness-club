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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { traineeSchema } from "@/utils/schema/auth";
import useApiRequest from "@/utils/hooks/useApiRequest";
import { useRouter } from "next/navigation";
type formType = z.infer<typeof traineeSchema>;
const UserSignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(traineeSchema),
  });
  const { mutationFunction, isPending } = useApiRequest<
    formType & { role: "trainee" }
  >();
  console.log(errors);
  const onSubmit = (data: formType) => {
    mutationFunction({
      path: "auth/register",
      data,
      callback(res) {
        router.push("/login");
      },
    });
  };
  return (
    <Card className="mx-auto max-w-sm shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset
            className="grid gap-4"
            disabled={isPending}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="Max"
                  {...register("first_name")}
                  error={errors.first_name?.message}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Robinson"
                  {...register("last_name")}
                  error={errors.last_name?.message}
                />
              </div>
            </div>
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
                placeholder="Password"
                {...register("password")}
                error={errors.password?.message}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
            >
              Create an account
            </Button>
          </fieldset>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline"
          >
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserSignUp;
