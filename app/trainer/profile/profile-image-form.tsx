"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IMG_URL } from "@/utils/constants";
import useApiRequest from "@/utils/hooks/useApiRequest";
import { useState } from "react";
const UpdateProfileImage = ({
  image,
  first_name,
  refetch,
}: {
  image: string | undefined;
  first_name: string;
  refetch: () => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const { isPending, mutationFunction } = useApiRequest({
    method: "patch",
  });
  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      const formData = new FormData();
      formData.append("profile_image", e.target.files[0]);
      mutationFunction({
        path: "auth/update-profile-image",
        data: formData,
        callback() {
          refetch();
        },
      });
    }
  }
  return (
    <div className="space-y-6">
      <div className="flex flex-col  space-y-4">
        <Avatar className="size-28">
          <AvatarImage
            alt="Profile Picture"
            src={file ? URL.createObjectURL(file) : IMG_URL + image}
          />
          <AvatarFallback>{first_name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <input
            type="file"
            className="sr-only"
            id="file-upload"
            onChange={onImageChange}
            disabled={isPending}
          />
          <Button
            asChild
            variant={"outline"}
          >
            <label htmlFor="file-upload">Change Picture</label>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileImage;
