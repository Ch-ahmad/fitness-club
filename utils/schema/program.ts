import { z } from "zod";
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/svg+xml", // Correct MIME type for SVG images
];
export const addExerciseSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  description: z.string().min(1, "Description is required!"),
});
export const addProgramSchema = z.object({
  daysCount: z.string().min(1, "Days count is required!"),
  name: z.string().min(1, "Name is required!"),
  description: z.string().min(1, "Description is required!"),
  price: z.string().min(1, "Price is required!"),
  image: z
    .any()
    .refine((files) => files?.length === 1, "Image is required.")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png, .webp, and .svg files are accepted."
    ),
});
