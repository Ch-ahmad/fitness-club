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
import { trainerSchema } from "@/utils/schema/auth";
import type { z } from "zod";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import useApiRequest from "@/utils/hooks/useApiRequest";
import useToast from "@/utils/hooks/useToast";
import { cn } from "@/lib/utils";
type formType = z.infer<typeof trainerSchema>;
const CoachSignUp = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [documentFiles, setDocumentFiles] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(trainerSchema),
  });
  const { toastError } = useToast();
  const { isPending, mutationFunction } = useApiRequest();
  const onSubmit = (data: formType) => {
    if (documentFiles.length === 0) {
      toastError("Please upload your documents");
      return;
    }
    console.log(documentFiles);
    const formData = new FormData();
    // biome-ignore lint/complexity/noForEach: <explanation>
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // biome-ignore lint/complexity/noForEach: <explanation>
    documentFiles.forEach((file) => {
      formData.append("documents", file);
    });
    mutationFunction({
      path: "auth/register",
      data: formData,
      callback: (res) => {
        console.log("Response", res);
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
                  placeholder="First Name"
                  {...register("first_name")}
                  error={errors.first_name?.message}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Last Name"
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
                placeholder="Email"
                {...register("email")}
                error={errors.email?.message}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                {...register("password")}
                error={errors.password?.message}
              />
              <div className="flex flex-wrap gap-2">
                {documentFiles.map((file, i) => (
                  <div
                    className="bg-primary p-[5px] rounded flex items-center gap-x-[5px]"
                    key={file.name}
                  >
                    <h1 className="text-white text-sm font-semibold">
                      {file.name}
                    </h1>
                    <X
                      className="text-red-400 cursor-pointer"
                      onClick={() => {
                        setDocumentFiles((prev) =>
                          prev.filter((file, index) => index !== i)
                        );
                        if (fileRef.current) {
                          fileRef.current.value = "";
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <Button asChild>
                <label
                  className={cn("cursor-pointer", {
                    "cursor-not-allowed": isPending,
                  })}
                  htmlFor="fileInput"
                >
                  Attach Documents
                </label>
              </Button>
              <Input
                className="sr-only w-[30px]"
                id="fileInput"
                type="file"
                ref={fileRef}
                accept=".pdf,.docx,.txt"
                onChange={(e) => {
                  const { files } = e.target;
                  if (files) {
                    setDocumentFiles((prev) => [...prev, files[0]]);
                  }
                }}
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

export default CoachSignUp;
