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
      { message: "Formato de telefone inválido. Use apenas números, parênteses e espaços." }
    ),
  email: z
    .string()
    .email({ message: "Informe um endereço de e-mail válido." }),
  subject: z
    .string()
    .min(3, { message: "O assunto deve conter pelo menos 3 caracteres." })
    .max(80, { message: "O assunto não pode exceder 80 caracteres." }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve conter pelo menos 10 caracteres." })
    .max(2000, { message: "A mensagem não pode exceder 2000 caracteres." }),
  consent: z.literal(true, {
    message: "Você precisa consentir com o tratamento dos seus dados para enviar a mensagem.",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
