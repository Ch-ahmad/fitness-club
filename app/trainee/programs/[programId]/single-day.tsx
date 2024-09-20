import { cn } from "@/lib/utils";
import ExerciseCollection from "./ExerciseCollection";
import type {  ITraineeDay } from "@/lib/types";
interface ISinglePlanProps {
  isEmpty?: boolean;
}
const PlanSingleDay = ({ exercises, name ,_id}: ITraineeDay) => {
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
        <ExerciseCollection exercises={exercises}  dayId={_id}/>
      </div>
    </div>
  );
};

export default PlanSingleDay;
