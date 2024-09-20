import SingleTrainer from "./single-trainer";
import FitnessPrograms from "./FitnessProgram";

const SingleCoachPrograms = ({
  params: { coachId },
}: {
  params: { coachId: string };
}) => {
  console.log(coachId);
  return (
    <div className="w-full px-4 md:px-6 py-10">
      <SingleTrainer id={coachId} />
      <FitnessPrograms id={coachId} />
    </div>
  );
};

export default SingleCoachPrograms;
