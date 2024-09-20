import SingleTrainer from "./single-trainer";
import FitnessPrograms from "./FitnessProgram";

const SingleCoachPrograms = () => {
  return (
    <div className="w-full px-4 md:px-6 py-10">
      <SingleTrainer />
      <FitnessPrograms />
    </div>
  );
};

export default SingleCoachPrograms;
