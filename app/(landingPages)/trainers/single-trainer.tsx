import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import type { IUser } from "@/lib/types";
import { IMG_URL } from "@/utils/constants";
const SingleTrainer = ({
  last_name,
  first_name,
  profile_image,
  _id,
}: IUser) => {
  return (
    <Link
      href={`/trainers/${_id}`}
      className="group relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-50"
    >
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage
            alt={first_name}
            src={IMG_URL + profile_image}
          />
          <AvatarFallback>
            {first_name.charAt(0) + last_name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">
            {/* biome-ignore lint/style/useTemplate: <explanation> */}
            {first_name + " " + last_name}
          </h3>
         
        </div>
      </div>
    </Link>
  );
};

export default SingleTrainer;
