"use client";
import Link from "next/link";
import SingleProgram from "./SingleProgram";
import { Button } from "@/components/ui/button";
import useTrainerPrograms from "@/utils/fetchHooks/useTrainerPrograms";

export default function FitnessPrograms({ id }: { id: string }) {
  const { isLoading, response } = useTrainerPrograms(id);
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
