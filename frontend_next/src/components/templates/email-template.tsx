import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  date: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  date,
  message
}) => (
  <div>
    <h1>Mahlzeit Mario!</h1>
    <p>
      Der {name} hat dir eine Nachricht geschickt. Hier sind die Details:
    </p>
    <ul>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
      <li>Datum: {date}</li>
      <li>Nachricht: {message}</li>
    </ul>
  </div>
);