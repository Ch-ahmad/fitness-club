"use client";
import React from "react";
import { Trash2 } from "lucide-react";
import EditExerciseModal from "./EditExerciseModal";
import ExerciseDetailModal from "./ExeciseDetailModal";
import type { IExercise } from "@/lib/types";
import useApiRequest from "@/utils/hooks/useApiRequest";
import { useParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
const SingleExercisePlan = ({
  _id,
  description,
  name,
  dayId,
  refetch,
}: IExercise & { dayId: string; refetch: () => void }) => {
  const { programId } = useParams();
  const { isPending, mutationFunction } = useApiRequest({
    method: "put",
  });
  const queryClient = useQueryClient();
  const onDelete = () => {
    mutationFunction({
      path: `trainer/delete-exercise/${programId}`,
      data: {
        exerciseId: _id,
        dayId,
      },
      callback() {
        refetch();
      },
    });
  };

  return (
    <div className="w-full flex items-center justify-between">
      <h3 className="text-sm text-secondary w-[55%] truncate">{name}</h3>
      <div className="flex items-center gap-x-[9px]">
        <button
          type="button"
          onClick={onDelete}
          disabled={isPending}
        >
          <Trash2 className="text-red-500 size-5" />
        </button>
        <ExerciseDetailModal
          description={description}
          name={name}
          _id={_id}
        />
        <EditExerciseModal
          description={description}
          name={name}
          _id={_id}
          dayId={dayId}
          refetch={refetch}
        />
      </div>
    </div>
  );
};
export default SingleExercisePlan;
