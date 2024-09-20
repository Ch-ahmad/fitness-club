"use client";

import useSingleProgram from "@/utils/fetchHooks/useSingleProgram";
import PlanSingleDay from "./single-day";

const ProgramsCollections = ({ id }: { id: string }) => {
  const { isLoading, response } = useSingleProgram(id);
  console.log({
    isLoading,
    response,
  });
  if (isLoading) {
    return <>Loading</>;
  }
  return (
    <>
      <div className="">
        <h1 className="text-xl font-semibold">{response.name}</h1>
        <p className="w-full md:w-[70%]">{response.description}</p>
      </div>
      <main className="w-full flex flex-wrap gap-[5px]">
        {response?.days.map((day) => (
          <PlanSingleDay
            {...day}
            key={day._id}
          />
        ))}
      </main>
    </>
  );
};

export default ProgramsCollections;
