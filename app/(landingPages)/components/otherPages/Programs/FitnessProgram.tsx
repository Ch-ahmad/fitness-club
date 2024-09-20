"use client";
import Link from "next/link";
import SingleProgram from "./SingleProgram";
import { Button } from "@/components/ui/button";
import usePrograms from "@/utils/fetchHooks/usePrograms";
import SingleProgramLoader from "@/app/(landingPages)/programs/single-program-loader";

export default function FitnessPrograms() {
  const array = [1, 2, 3, 4, 5, 6];
  const { isLoading, response } = usePrograms();

  return (
    <section
      className="w-full py-12"
      id="programs"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Our Fitness Programs
            </h2>
            <p className="max-w-[700px] text-secondary md:text-xl dark:text-gray-400">
              Explore our wide range of fitness programs tailored to your needs.
            </p>
          </div>
        </div>
        <div className="flex gap-[15px] flex-wrap mt-[30px]">
          {isLoading
            ? array.map((i) => <SingleProgramLoader key={i} />)
            : response?.slice(0, 6).map((program) => (
                <SingleProgram
                  key={program._id}
                  {...program}
                />
              ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-[50px]">
        <Button asChild>
          <Link href={"/programs"}>Explore More</Link>
        </Button>
      </div>
    </section>
  );
}
