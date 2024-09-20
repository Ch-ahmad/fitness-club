import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section
      className="w-full "
      id="home"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                Transform Your Body with Our Fitness Program
              </h1>
              <p className="max-w-[600px] text-secondary md:text-xl dark:text-gray-400">
                Achieve your fitness goals with our comprehensive program that
                combines personalized workouts, nutrition guidance, and
                accountability.
              </p>
            </div>
            <div>
              <Button asChild>
                <Link href={"/signup"}>Get Started</Link>
              </Button>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto aspect-[13/10] overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="500"
            src="/fitness.jpg"
            width="650"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
