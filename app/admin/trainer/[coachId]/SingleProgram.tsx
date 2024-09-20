import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { IProgram } from "@/lib/types";
import { IMG_URL } from "@/utils/constants";

const SingleProgram = ({ _id, image, description, name }: IProgram) => {
  return (
    <Link
      className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl w-full md:w-[32%]"
      href={`/admin/programs/${_id}`}
    >
      <Image
        alt="Yoga"
        className="h-60 w-full object-cover object-center transition-all group-hover:scale-105"
        height="240"
        src={IMG_URL + image}
        style={{
          aspectRatio: "360/240",
          objectFit: "cover",
        }}
        width="360"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 space-y-2 p-4 text-white">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default SingleProgram;
