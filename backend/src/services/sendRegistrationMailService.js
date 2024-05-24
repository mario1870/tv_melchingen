import { __dirname } from './utils.js';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
import { sendEmail } from './emailService.js'; // Adjust this import if necessary

const sendRegistrationEmail = async (email, teamID) => {
  try {
    const htmlFilePath = path.join(__dirname, '..', 'views', 'successfulRegistrationMail.html');
    
    // Use fs.promises to read file asynchronously
    const htmlContent = await fs.promises.readFile(htmlFilePath, 'utf8');

    
    // Define the path to the image
    const imageFilePath = path.join(__dirname, '..', 'views', 'TVMlogo.png');

    const variables = { activationLink: `https://www.tv-melchingen.de/elfmeterturnier/teaminfos/${teamID}`};
    const renderedHTML = ejs.render(htmlContent, variables);

    const mailOptions = {
      from: 'marioraach01@gmail.com',
      to: email,
      subject: 'Test Email',
      html: renderedHTML,
      attachments: [
        {
          filename: 'TVMlogo.png',
          path: imageFilePath,
          cid: 'tvm-logo' // same cid value as in the html img src
        }
      ],
    };

    await sendEmail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Error sending email');
  }
};

export { sendRegistrationEmail };
