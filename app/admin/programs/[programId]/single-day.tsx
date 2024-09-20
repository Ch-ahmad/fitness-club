import { cn } from "@/lib/utils";
import ExerciseCollection from "./ExerciseCollection";
import type { IDay } from "@/lib/types";
interface ISinglePlanProps {
  isEmpty?: boolean;
}
const PlanSingleDay = ({ name, exercises }: IDay) => {
  console.log({
    name,
    exercises,
  });
  return (
    <div className="border border-primary/40 h-[400px] rounded w-[24%]">
      <div className="w-full py-[3px] border-b border-primary/40 text-center">
        <h1 className="text-primary">{name}</h1>
      </div>
      <div
        className={cn(
          "h-[calc(100%-30px)]  flex  items-center justify-center",
          {
            "items-start": exercises?.length === 0,
          }
        )}
      >
        <ExerciseCollection exercises={exercises} />
      </div>
    </div>
  );
};

export default PlanSingleDay;
