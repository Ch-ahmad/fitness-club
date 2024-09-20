"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const UpdateProfileImage = () => {
  const [file, setFile] = useState<File | null>(null);
  return (
    <div className="space-y-6">
      <div className="flex flex-col  space-y-4">
        <Avatar className="size-28">
          <AvatarImage
            alt="Profile Picture"
            src={file ? URL.createObjectURL(file) : "/profile.png"}
          />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div>
          <input
            type="file"
            className="sr-only"
            id="file-upload"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
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
