"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FormSchemaType, formSchema } from "@/schemas"

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
import { handleSendEmailByRouteApi } from "../services/send-email"

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

  const handleSubmit = async (data: FormSchemaType) => {
    const response = await handleSendEmailByRouteApi(data)
    if (response.status === "success") {
      toast({
        title: "E-mail enviado!",
        description: "Sua mensagem foi enviada com sucesso.",
      })
      form.reset()
    } else {
      toast({
        title: "Erro ao enviar e-mail!",
        description: "Houve um erro ao enviar sua mensagem.",
      })
    }
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
