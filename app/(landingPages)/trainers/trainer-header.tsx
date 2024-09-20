import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const TrainerHeader = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Find the Perfect Coach
        </h1>
        <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
          Search and select from our experienced coaches.
        </p>
      </div>
      <div className="mb-8">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          <Input
            className="w-full rounded-lg border border-gray-200 px-12 py-3 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:focus:border-gray-50 dark:focus:ring-gray-50"
            placeholder="Search coaches..."
            type="search"
          />
        </div>
      </div>
    </>
  );
};

export default TrainerHeader;
