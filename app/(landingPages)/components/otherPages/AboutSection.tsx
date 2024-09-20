import { Button } from "@/components/ui/button";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32"
      id="about"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              About Our Fitness Center
            </h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              At our fitness center, we believe that health and wellness are
              essential for a fulfilling life. Our mission is to empower our
              community to achieve their fitness goals through personalized
              programs, expert guidance, and a supportive environment.
            </p>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Our approach to health and wellness is holistic, focusing on
              physical, mental, and emotional well-being. We offer a wide range
              of fitness classes, personal training, and nutritional counseling
              to help our members reach their full potential.
            </p>
            <Button variant="link">Learn More</Button>
          </div>
          <Image
            alt="Fitness Center"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="480"
            src="/fitness.jpg"
            width="640"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
