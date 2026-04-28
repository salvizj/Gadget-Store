import { z } from "zod"
import { isSafeString } from "./utils"

const safeString = (message = "Invalid characters detected") => z.string().refine(isSafeString, { message })

export const productFormSchema = z
  .object({
    id: z.number().optional(),
    title: safeString().min(2, "Title is required"),
    price: safeString()
      .min(1, "Price is required")
      .refine((val) => Number(val) > 0, "Price must be greater than 0"),
    short_description: safeString().min(1, "Short description is required"),
    long_description: safeString().min(1, "Long description is required"),
    image: safeString().min(1, "Image is required"),
    year: safeString()
      .min(1, "Year is required")
      .refine((val) => Number(val) > 1900, "Invalid year"),
    RAM: safeString().min(1, "RAM is required"),
    warranty_period: safeString().min(1, "Warranty period is required"),
    features: safeString()
      .min(1, "At least one feature is required")
      .transform((val) =>
        val
          .split(",")
          .map((f) => f.trim())
          .filter(Boolean),
      )
      .refine((arr) => arr.length > 0, "At least one valid feature is required"),
  })
  .superRefine((data, ctx) => {
    if (data.image !== data.title) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["image"],
        message: "Image name must match the title",
      })
    }
  })

export type ProductFormData = z.infer<typeof productFormSchema>
