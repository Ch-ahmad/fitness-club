"use client";
import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import useSingleTrainer from "@/utils/fetchHooks/useSingleTrainer";
import { IMG_URL } from "@/utils/constants";
const SingleTrainer = ({ id }: { id: string }) => {
  const { response, isLoading } = useSingleTrainer(id);
  console.log(response, isLoading);
  if (isLoading) {
    return <>loading....</>;
  }

  return (
    <div className="group relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all  dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-50">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage
            alt="Coach Avatar"
            src={IMG_URL + response?.profile_image}
            className="object-cover"
          />
          <AvatarFallback>
            {response.first_name.charAt(0) + response.last_name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">
            {/* biome-ignore lint/style/useTemplate: <explanation> */}
            {response.first_name + " " + response?.last_name}
          </h3>
        
        </div>
      </div>
 
    </div>
  );
};

export default SingleTrainer;
