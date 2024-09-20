"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addExerciseSchema } from "@/utils/schema/program";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useApiRequest from "@/utils/hooks/useApiRequest";
type formType = z.infer<typeof addExerciseSchema>;
const AddExerciseModal = ({
  dayId,
  refetch,
}: {
  dayId: string;
  refetch: () => void;
}) => {
  const { programId } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<formType>({
    resolver: zodResolver(addExerciseSchema),
  });
  const { mutationFunction, isPending } = useApiRequest({
    method: "put",
  });
  const onSubmit = (data: formType) => {
    mutationFunction({
      path: `trainer/add-exercise/${programId}`,
      data: {
        ...data,
        dayId,
      },
      callback(res) {
        refetch();
        setOpen(false);
        reset();
        console.log(res);
      },
      errorCallBack(res) {
        console.log(res);
      },
    });
  };
  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className="flex flex-col w-full items-center justify-center"
        onClick={() => setOpen(true)}
      >
        <Plus className="size-5 cursor-pointer" />
        <Button
          variant="link"
          className="-mt-[10px]"
        >
          Add Exercise
        </Button>
      </div>

      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
          reset();
        }}
      >
        <DialogContent className="sm:max-w-[495px]">
          <DialogHeader>
            <DialogTitle>Add Exercise</DialogTitle>
            <DialogDescription>
              Add exercise with details to user to follow up.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset
              className="flex flex-col space-y-6"
              disabled={isPending}
            >
              <Input
                id="name"
                className="col-span-3"
                {...register("name")}
                error={errors.name?.message}
                placeholder="Exercise name"
              />

              <Textarea
                placeholder="Exercise Description"
                {...register("description")}
                error={errors.description?.message}
              />
              <Button type="submit">Add Exercise</Button>
            </fieldset>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddExerciseModal;
