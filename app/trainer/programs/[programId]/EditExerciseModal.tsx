"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SquarePen } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import type { z } from "zod";
import { addExerciseSchema } from "@/utils/schema/program";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { IExercise } from "@/lib/types";
import useApiRequest from "@/utils/hooks/useApiRequest";
import { useParams } from "next/navigation";
import { useState } from "react";
type formType = z.infer<typeof addExerciseSchema>;
const EditExerciseModal = ({
  _id,
  dayId,
  description,
  name,
  refetch,
}: IExercise & { dayId: string; refetch: () => void }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { programId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(addExerciseSchema),
    defaultValues: {
      name,
      description,
    },
  });
  const { mutationFunction, isPending } = useApiRequest({
    method: "put",
  });
  const onSubmit = (data: formType) => {
    mutationFunction({
      path: `trainer/update-exercise/${programId}`,
      data: {
        ...data,
        dayId,
        exerciseId: _id,
      },
      callback() {
        setOpen(false);
        refetch();
      },
    });
  };
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        <SquarePen className="size-5" />
      </button>
      <Dialog
        open={open}
        onOpenChange={() => setOpen(false)}
      >
        <DialogContent className="sm:max-w-[495px]">
          <DialogHeader>
            <DialogTitle>Edit Exercise</DialogTitle>
            <DialogDescription>Change exercise details.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset
              className="flex flex-col space-y-6"
              disabled={isPending}
            >
              <Input
                id="name"
                className="col-span-3"
                placeholder="Exercise name"
                {...register("name")}
                error={errors.name?.message}
              />

              <Textarea
                placeholder="Exercise Description"
                {...register("description")}
                error={errors.description?.message}
              />
              <Button type="submit">Save</Button>
            </fieldset>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditExerciseModal;
