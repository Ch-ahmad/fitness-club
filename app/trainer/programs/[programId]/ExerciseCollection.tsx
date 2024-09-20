import React from "react";
import SingleExercisePlan from "./single-exer-plan";
import AddExerciseModal from "./AddExerciseModal";
import type { IExercise } from "@/lib/types";

const ExerciseCollection = ({
  exercises,
  dayId,
  refetch,
}: {
  exercises: IExercise[];
  dayId: string;
  refetch: () => void;
}) => {
  return (
    <div className="w-full px-[8px] py-[10px] space-y-2 overflow-y-auto h-full">
      {exercises.map((exercise) => (
        <SingleExercisePlan
          key={exercise._id}
          dayId={dayId}
          refetch={refetch}
          {...exercise}
        />
      ))}

      <AddExerciseModal
        dayId={dayId}
        refetch={refetch}
      />
    </div>
  );
};

export default ExerciseCollection;
