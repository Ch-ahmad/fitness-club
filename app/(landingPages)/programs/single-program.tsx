import type { IProgram } from "@/lib/types";
import { IMG_URL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProgramLanding = ({ name, description, image, _id }: IProgram) => {
  return (
    <Link
      className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 "
      href={`/programs/${_id}`}
    >
      <Image
        alt={name}
        className="w-full h-48 object-cover"
        height={300}
        src={IMG_URL + image}
        style={{
          aspectRatio: "400/300",
          objectFit: "cover",
        }}
        width={400}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default SingleProgramLanding;
