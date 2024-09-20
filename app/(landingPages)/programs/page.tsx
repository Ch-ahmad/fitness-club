"use client";
import React from "react";
import ProgramSearchBarHeader from "./program-header";
import ProgramsCollection from "./programs-collection";

const ProgramsLandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <ProgramSearchBarHeader />
      <ProgramsCollection />
    </div>
  );
};

export default ProgramsLandingPage;
