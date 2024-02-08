"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";

const formSchema = z.object({
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

type FormSchemaType = z.infer<typeof formSchema>

export function ContactForm() {
  const { toast } = useToast()

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    }
  })

  const handleSubmit = (data: FormSchemaType) => {
    console.log(data)
    toast({
      title: "Seu e-mail foi enviado!",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full flex flex-col gap-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <div className="h-5">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu email" {...field} />
              </FormControl>
              <div className="h-5">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="visitor"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Quem é você?</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Informe sua posição" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="cliente">Cliente</SelectItem>
                    <SelectItem value="recrutador">Recrutador</SelectItem>
                  </SelectContent>
                </Select>
                <div className="h-5">
                  <FormMessage />
                </div>
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deixe aqui sua mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Olá, estou interessado em seu trabalho..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Eu vou responder o mais rápido possível.
              </FormDescription>
              <div className="h-5">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Enviar</Button>
      </form>
    </Form>
  )
}
