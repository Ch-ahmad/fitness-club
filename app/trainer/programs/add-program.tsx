"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useApiRequest from "@/utils/hooks/useApiRequest";
import { addProgramSchema } from "@/utils/schema/program";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
type IProgram = z.infer<typeof addProgramSchema>;
export default function AddProgramModal({ refetch }: { refetch: () => void }) {
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    resetField,
  } = useForm<IProgram>({
    resolver: zodResolver(addProgramSchema),
  });
  const { isPending, mutationFunction } = useApiRequest();
  const onSubmit = (data: IProgram) => {
    const formData = new FormData();
    // biome-ignore lint/complexity/noForEach: <explanation>
    Object.entries(data).forEach(([key, value]) => {
      if (key === "image") {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    });
    mutationFunction({
      path: "trainer/add-program",
      data: formData,
      callback: () => {
        refetch();
        setOpen(false);
        reset();
      },
    });
  };
  const selectedFile = watch("image");
  const isSelectedFile =
    selectedFile instanceof FileList && selectedFile.length > 0;

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Program
      </Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent className="sm:max-w-[495px] h-[80%] overflow-y-auto  ">
          <DialogHeader>
            <DialogTitle>Add Program</DialogTitle>
            <DialogDescription>
              Add program by providing name and days.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset
              className="flex flex-col space-y-3"
              disabled={isPending}
            >
              <Input
                className="col-span-3"
                placeholder="Program name"
                {...register("name")}
                error={errors.name?.message}
              />

              <Input
                className="col-span-3"
                placeholder="Price"
                {...register("price")}
                error={errors.price?.message}
              />
              <Input
                className="col-span-3"
                placeholder="Program days"
                {...register("daysCount")}
                error={errors.daysCount?.message}
              />
              <Textarea
                placeholder="Program description"
                {...register("description")}
                error={errors.description?.message}
              />
              <div className="">
                {isSelectedFile ? (
                  <div className="relative flex h-[200px] w-full items-center justify-center">
                    <Image
                      src={
                        selectedFile[0]
                          ? URL.createObjectURL(selectedFile[0])
                          : ""
                      }
                      className="h-full w-[80%] object-contain"
                      alt="Selected Image"
                      width={200}
                      height={200}
                    />
                    <X
                      className="absolute right-0 top-0 cursor-pointer text-warn"
                      onClick={() => {
                        resetField("image");
                      }}
                    />
                  </div>
                ) : (
                  <>
                    <Button asChild>
                      <label htmlFor="programFile">Attach Photo</label>
                    </Button>
                    <Input
                      className="sr-only"
                      type="file"
                      id="programFile"
                      accept="image/*"
                      {...register("image")}
                      error={errors.image?.message as string}
                    />
                  </>
                )}
              </div>
              <Button type="submit">Add Program</Button>
            </fieldset>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
