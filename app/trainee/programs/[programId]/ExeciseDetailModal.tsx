import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
const ExerciseDetailModal = ({
  description,
  name,
}: {
  name: string;
  description: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Eye className="size-5" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[495px]">
        <DialogHeader>
          <DialogTitle>Exercise Details</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-6">
          <div className="">
            <h1 className="font-semibold text-sm leading-0">Name</h1>
            <p className="text-sm text-secondary">{name}</p>
          </div>
          <div className="">
            <h1 className="font-semibold text-sm leading-0">Description</h1>
            <p className="text-sm text-secondary">{description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseDetailModal;
