import SectionLanding from "./components/SectionLanding";
import FitnessPrograms from "./components/otherPages/Programs/FitnessProgram";
import HeroSection from "./components/otherPages/HeroSection";
import TrainerSection from "./components/otherPages/Trainers/TrainerSection";
import AboutSection from "./components/otherPages/AboutSection";
export default function Component() {
  return (
    <>
      <HeroSection />
      <SectionLanding />
      <FitnessPrograms />
      <TrainerSection />
      <AboutSection />
    </>
  );
}
