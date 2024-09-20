import React from "react";
import SingleExercisePlan from "./single-exer-plan";
import type {  ITraineeExercise } from "@/lib/types";

const ExerciseCollection = ({ exercises,dayId}: { exercises: ITraineeExercise[],dayId:string }) => {
  return (
    <div className="w-full px-[8px] py-[10px] space-y-2 overflow-y-auto h-full">
      {exercises.length === 0 ? (
        <p className="text-center text-primary">No exercises found</p>
      ) : (
        exercises?.map((exer) => (
          <SingleExercisePlan
          dayId={dayId}
            key={exer._id}
            {...exer}
          />
        ))
      )}
    </div>
  );
};

export default ExerciseCollection;
