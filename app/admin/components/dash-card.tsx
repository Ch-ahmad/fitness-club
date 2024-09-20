import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Tally4 } from "lucide-react";
const DashBoarCard = () => {
  return (
    <Card className="w-full md:w-[32%] flex-grow">
      <CardContent className="px-[10px] py-[15px] flex items-center gap-x-[10px]">
        <div className="size-[40px] flex items-center justify-center bg-primary/25 rounded-full">
          <User className="size-6" />
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-primary -leading-[10px]">
            1230
          </h3>
          <p className="text-secondary mt-[-6px] text-[14px]">Total Exercise</p>
        </div>
        <Tally4 className="size-8 text-primary ml-auto" />
      </CardContent>
    </Card>
  );
};

export default DashBoarCard;
