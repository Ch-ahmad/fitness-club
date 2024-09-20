import { cn } from "@/lib/utils";
import AddExerciseModal from "./AddExerciseModal";
import ExerciseCollection from "./ExerciseCollection";
import type { IDay } from "@/lib/types";

const PlanSingleDay = ({
  exercises,
  _id,
  name,
  refetch,
}: IDay & { refetch: () => void }) => {
  return (
    <div className="border border-primary/40 h-[400px] rounded w-[24%]">
      <div className="w-full py-[3px] border-b border-primary/40 text-center">
        <h1 className="text-primary">{name}</h1>
      </div>
      <div
        className={cn(
          "h-[calc(100%-30px)]  flex  items-center justify-center",
          {
            "items-start": exercises.length === 0,
          }
        )}
      >
        {exercises.length !== 0 ? (
          <ExerciseCollection
            exercises={exercises}
            dayId={_id}
            refetch={refetch}
          />
        ) : (
          <AddExerciseModal
            dayId={_id}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};

export default PlanSingleDay;
