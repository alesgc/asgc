 import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve conter pelo menos 2 caracteres." })
    .max(100, { message: "O nome não pode exceder 100 caracteres." }),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[0-9()\s+-]+$/.test(val),
      { message: "Formato de telefone inválido." }
    ),
  email: z
    .string()
    .email({ message: "Informe um endereço de e-mail válido." }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve conter pelo menos 10 caracteres." })
    .max(1000, { message: "A mensagem não pode exceder 1000 caracteres." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;