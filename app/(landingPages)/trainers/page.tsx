"use client";
import TrainerHeader from "./trainer-header";
import SingleTrainer from "./single-trainer";
import useTrainers from "@/utils/fetchHooks/useTrainers";

export default function Component() {
  const { isLoading, response } = useTrainers("active", "public");

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <TrainerHeader />
      {isLoading ? (
        <>loading.....</>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {response.length === 0 ? (
            <p>No trainers found</p>
          ) : (
            response?.map((trainer) => (
              <SingleTrainer
                key={trainer._id}
                {...trainer}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
