"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useMutation } from '@tanstack/react-query';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().min(2, {
    message: "Email muss mindestens 2 Zeichen lang sein.",
  }),
  date: z.string().min(2, {
    message: "Datum muss mindestens 2 Zeichen lang sein.",
  }),
  message: z.string().min(2, {
    message: "Nachricht muss mindestens 2 Zeichen lang sein.",
  }),
})


export function FormComponent() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            date: "",
            message: "",
        },
    })

    const sendEmail = useMutation({
        mutationFn: async (formData: z.infer<typeof formSchema>) => {
          const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Fehler beim Senden der E-Mail');
          }
          
          return response.json();
        },
        onSuccess: () => {
          form.reset();
        },
      });
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        sendEmail.mutate(values);
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-[40rem] px-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Max Mustermann" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Addresse</FormLabel>
              <FormControl>
                <Input placeholder="max@mustermann.de" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Datum</FormLabel>
              <FormControl>
                <Input placeholder="22.01.2026" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nachricht</FormLabel>
              <FormControl>
                <Textarea placeholder="Hallo, ich bin ..." className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
