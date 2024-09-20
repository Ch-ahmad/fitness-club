"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  height: z.string().min(1, "Height is required"),
  email: z.string().min(1, "Email is required!").email(),
});
type formType = z.infer<typeof profileSchema>;
const ProfileUpdateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(profileSchema),
  });
  const onSubmit = (data: formType) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[10px]"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="first-name"
            label="First name"
            placeholder="First Name"
            {...register("firstName")}
            error={errors.firstName?.message}
          />

          <Input
            id="last-name"
            label="Last name"
            placeholder="Last name"
            {...register("lastName")}
            error={errors.lastName?.message}
          />
        </div>

        <Input
          id="height"
          placeholder="Height"
          type="number"
          label="Height (cm)"
          {...register("height")}
          error={errors.height?.message}
        />
        <Input
          id="Email"
          placeholder="Email"
          type="email"
          label="Email"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>
      <Button className="w-full mt-[15px]">Update Profile</Button>
    </form>
  );
};

export default ProfileUpdateForm;
