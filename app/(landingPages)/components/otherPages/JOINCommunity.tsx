import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const JOINCommunity = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Join Our Fitness Community
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Sign up for our newsletter to stay up-to-date on the latest fitness
            tips, programs, and exclusive offers.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <form className="flex space-x-2">
            <Input
              className="max-w-lg flex-1"
              placeholder="Enter your email"
              type="email"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JOINCommunity;
