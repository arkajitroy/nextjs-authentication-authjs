import * as z from "zod";

// reset schema
export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

// new password schema
export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});
