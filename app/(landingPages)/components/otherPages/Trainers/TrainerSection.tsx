"use client";
import React from "react";
import SingleTrainer from "./SingleTrainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useTrainers from "@/utils/fetchHooks/useTrainers";
const TrainerSection = () => {
  const { isLoading, response } = useTrainers("active", "public");
  if (isLoading) {
    return <>loading.....</>;
  }
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="trainers"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Meet Our Trainers
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our experienced trainers are here to help you achieve your fitness
              goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {response?.slice(0, 3)?.map((trainer) => (
            <SingleTrainer
              key={trainer._id}
              {...trainer}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button asChild>
          <Link href={"/trainers"}>Explore More</Link>
        </Button>
      </div>
    </section>
  );
};

export default TrainerSection;
