import { z } from "zod";

export const schema = z.object({
  username: z.string().min(4, "Minimo 4 caracteres").max(14, "Maximo 14 caracteres"),
  password: z
  .string()
  .refine((val) => /[A-Za-z]/.test(val), {
    message: "La contraseña debe tener al menos una letra",
  })
  .refine((val) => /\d/.test(val), {
    message: "La contraseña debe tener al menos un número",
  })
  .refine((val) => /[@$!%*?&]/.test(val), {
    message: "La contraseña debe tener al menos un carácter especial",
  })
  .refine((val) => /^[A-Za-z\d@$!%*?&]+$/.test(val), {
    message: "La contraseña contiene caracteres inválidos",
  })
  .refine((val) => val.length >= 8, {
    message: "La contraseña debe tener al menos 8 caracteres",
  })
}).required();



export type LoginFormValues = z.infer<typeof schema>;