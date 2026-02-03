import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.email("Please enter a valid email address"),
  message: z.string().min(1, "Message is required").max(1000),
});

export type FormErrors = Partial<
  Record<keyof z.infer<typeof contactSchema>, string[]>
>;
