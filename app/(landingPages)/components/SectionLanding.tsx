import React from "react";
import SingleSection from "./SingleSection";

const SectionLanding = () => {
  const sectionArray = [
    {
      icon: HeartPulseIcon,
      heading: "Cardio",
      content:
        "Get your heart pumping and improve your cardiovascular health with our high-intensity cardio workouts.",
    },
    {
      heading: "Personalized Workouts",
      content:
        "Tailored exercise routines designed to help you achieve your specific fitness goals.",
      icon: DumbbellIcon,
    },
    {
      heading: "Nutrition Guidance",
      content:
        "Comprehensive nutrition plans to support your fitness journey and overall health.",
      icon: NutIcon,
    },
    {
      heading: "Accountability",
      content:
        " Regular check-ins and support to keep you motivated and on track.",
      icon: ActivityIcon,
    },
  ];
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32"
      id="sections"
    >
      <div className=" px-4 md:px-6">
        <div className="flex justify-between items-start gap-8  flex-wrap">
          {sectionArray.map((section, index) => (
            <SingleSection
              key={index + section.heading}
              Icon={section.icon}
              heading={section.heading}
              content={section.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionLanding;

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function DumbbellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6.5 6.5 11 11" />
      <path d="m21 21-1-1" />
      <path d="m3 3 1 1" />
      <path d="m18 22 4-4" />
      <path d="m2 6 4-4" />
      <path d="m3 10 7-7" />
      <path d="m14 21 7-7" />
    </svg>
  );
}
function NutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4V2" />
      <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" />
      <path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" />
    </svg>
  );
}
function HeartPulseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}
