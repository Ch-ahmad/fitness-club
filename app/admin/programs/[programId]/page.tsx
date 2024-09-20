import React from "react";
import PlanSingleDay from "./single-day";
import ProgramsCollections from "./porgram-collection";

const ProgramLandingPage = ({
  params: { programId },
}: {
  params: { programId: string };
}) => {
  return (
    <section className="space-y-[15px] my-[30px]">
      <ProgramsCollections id={programId} />
    </section>
  );
};

export default ProgramLandingPage;
