"use client";
import React from "react";
import SingleProgramLanding from "./single-program";
import usePrograms from "@/utils/fetchHooks/usePrograms";
import SingleProgramLoader from "./single-program-loader";

const ProgramsCollection = () => {
  const { isLoading, response } = usePrograms();
  const array = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {isLoading
        ? array.map((i) => <SingleProgramLoader key={i} />)
        : response?.map((program) => (
            <SingleProgramLanding
              key={program._id}
              {...program}
            />
          ))}
    </div>
  );
};

export default ProgramsCollection;
