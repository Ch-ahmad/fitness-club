"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { IUser } from "@/lib/types";
import useApiRequest from "@/utils/hooks/useApiRequest";
const profileSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  // height: z.string().min(1, "Height is required"),
  // email: z.string().min(1, "Email is required!").email(),
});
type formType = z.infer<typeof profileSchema>;
const ProfileUpdateForm = ({
  first_name,
  last_name,
  refetch,
}: IUser & { refetch: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      first_name,
      last_name,
    },
  });
  const { isPending, mutationFunction } = useApiRequest({
    method: "patch",
  });
  const onSubmit = (data: formType) => {
    mutationFunction({
      path: "auth/update-profile",
      data,
      callback: () => {
        refetch();
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[10px]"
    >
      <fieldset disabled={isPending}>
        <div className="space-y-4">
          <>
            <Input
              id="first-name"
              label="First name"
              placeholder="First Name"
              {...register("first_name")}
              error={errors.first_name?.message}
            />

            <Input
              id="last-name"
              label="Last name"
              placeholder="Last name"
              {...register("last_name")}
              error={errors.last_name?.message}
            />
          </>
        </div>
        <Button className="w-full mt-[15px]">Update Profile</Button>
      </fieldset>
    </form>
  );
};

export default ProfileUpdateForm;
