import type { IUser } from "@/lib/types";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IMG_URL } from "@/utils/constants";
const SingleTrainer = ({
  profile_image,
  first_name,
  last_name,
  _id,
}: IUser) => {
  return (
    <Link
      href={`/trainers/${_id}`}
      className="flex flex-col items-center space-y-4"
    >
      <Avatar className="h-32 w-32 rounded-full object-cover bg-red-400">
        <AvatarImage
          src={IMG_URL + profile_image}
          alt={first_name}
          className="object-cover"
        />
        <AvatarFallback>
          {first_name.charAt(0) + last_name.charAt(0)}
        </AvatarFallback>
      </Avatar>

      <div className="space-y-1 text-center">
        <h3 className="text-xl font-bold text-primary">
          {/* biome-ignore lint/style/useTemplate: <explanation> */}
          {first_name + " " + last_name}
        </h3>
      
      </div>
    </Link>
  );
};

export default SingleTrainer;
