import { EmailTemplate } from '@/components/templates/email-template';
import { Resend } from 'resend';
import * as React from 'react';


const resend = new Resend(process.env.RESEND_API_KEY);


interface FormData {
  name: string;
  email: string;
  date: string;
  message: string;
}


export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['marioraach01@gmail.com'],
      subject: "Neue Nachricht von TV Melchingen Sportheim",
      react: EmailTemplate({ 
        name: formData.name,
        email: formData.email,
        date: formData.date,
        message: formData.message

      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}