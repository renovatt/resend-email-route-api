import { z } from "zod"

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "O nome de usuário deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Precisa ser um e-mail válido.",
  }),
  visitor: z.enum(["cliente", "recrutador"], { required_error: "Precisa selecionar uma opção." }),
  message: z
    .string()
    .min(10, {
      message: "A mensagem deve ter pelo menos 10 caracteres.",
    })
    .max(400, {
      message: "A mensagem é muito longa.",
    }),
})

export type FormSchemaType = z.infer<typeof formSchema>