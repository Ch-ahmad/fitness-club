import React from "react";
import ExerciseDetailModal from "./ExeciseDetailModal";
import type { IExercise } from "@/lib/types";
const SingleExercisePlan = ({ description, name }: IExercise) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h3 className="text-sm text-secondary w-[55%] truncate">{name}</h3>
      <div className="flex items-center gap-x-[9px]">
        <ExerciseDetailModal
          name={name}
          description={description}
        />
      </div>
    </div>
  );
};
export default SingleExercisePlan;
