import React, { FC } from "react";

const SingleSection = ({
  content,
  heading,
  Icon,
}: {
  Icon: FC<{ className?: string }>;
  heading: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-y-2   w-full md:w-[22%]">
      {<Icon className="" />}
      <h3 className="text-lg font-bold text-primary ">{heading}</h3>
      <p className="text-secondary">{content}</p>
    </div>
  );
};

export default SingleSection;
