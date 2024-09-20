"use client";
import SingleProgram from "./SingleProgram";
import useTrainerPrograms from "@/utils/fetchHooks/useTrainerPrograms";
import { useParams } from "next/navigation";

export default function FitnessPrograms() {
  const { coachId } = useParams();
  const { isLoading, response } = useTrainerPrograms(coachId as string);
  if (isLoading) {
    return <>loading....</>;
  }
  return (
    <>
      <>
        <div className="flex gap-y-[15px] justify-between flex-wrap mt-[30px]">
          {response.length === 0 ? (
            <>No Programs</>
          ) : (
            response.map((program) => (
              <SingleProgram
                {...program}
                key={program._id}
              />
            ))
          )}
        </div>
      </>
    </>
  );
}
