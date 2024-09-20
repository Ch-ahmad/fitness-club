import React from "react";
import ExerciseDetailModal from "./ExeciseDetailModal";
import type {  ITraineeExercise } from "@/lib/types";
import ExerciseStatusModal from "../../status_change";
const SingleExercisePlan = ({ description, name,status,_id,dayId }: ITraineeExercise & {dayId:string}) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h3 className="text-sm text-secondary w-[55%] truncate">{name}</h3>
      <div className="flex items-center gap-x-[9px]">
        <ExerciseStatusModal status={status} exerciseId={_id} dayId={dayId}/> 
        <ExerciseDetailModal
          name={name}
          description={description}
        />
      </div>
    </div>
  );
};
export default SingleExercisePlan;
