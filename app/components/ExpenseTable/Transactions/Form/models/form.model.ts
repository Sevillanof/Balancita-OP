import { z } from "zod";

export const schema = z.object({
  description: z.string().min(1, "La descripción es requerida"),
  amount: z.number().finite(),
});

export type FormValues = z.infer<typeof schema>;
