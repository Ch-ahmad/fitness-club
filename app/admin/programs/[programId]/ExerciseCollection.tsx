import React from "react";
import SingleExercisePlan from "./single-exer-plan";
import type { IExercise } from "@/lib/types";

const ExerciseCollection = ({ exercises }: { exercises: IExercise[] }) => {
  return (
    <div className="w-full px-[8px] py-[10px] space-y-2 overflow-y-auto h-full">
      {exercises.length === 0 ? (
        <>No exercise to show</>
      ) : (
        exercises?.map((exercise) => (
          <SingleExercisePlan
            {...exercise}
            key={exercise._id}
          />
        ))
      )}
    </div>
  );
};

export default ExerciseCollection;
