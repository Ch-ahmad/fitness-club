import React from "react";
import ProgramsData from "./program-data";
const SinglePlanPage = ({
  params: { programId },
}: {
  params: { programId: string };
}) => {
  return (
    <section className="space-y-[15px]">
      <ProgramsData programId={programId} />
    </section>
  );
};

export default SinglePlanPage;
