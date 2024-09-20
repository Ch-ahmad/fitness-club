import React from "react";
import SingleExercisePlan from "./single-exer-plan";
import type { IExercise } from "@/lib/types";

const ExerciseCollection = ({ exercises }: { exercises: IExercise[] }) => {
  return (
    <div className="w-full px-[8px] py-[10px] space-y-2 overflow-y-auto h-full">
      {exercises.length === 0 ? (
        <p className="text-center text-primary">No exercises found</p>
      ) : (
        exercises?.map((exer) => (
          <SingleExercisePlan
            key={exer._id}
            {...exer}
          />
        ))
      )}
    </div>
  );
};

export default ExerciseCollection;
