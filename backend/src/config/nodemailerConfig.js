// config/nodemailerConfig.ts
import { createTransport } from "nodemailer";

const nodemailerUser = process.env.NODEMAILER_USER || "default_value";
const nodemailerPW = process.env.NODEMAILER_PW || "default_value";
const nodemailerService = process.env.NODEMAILER_SERVICE || "Gmail";
const nodemailerHost = process.env.NODEMAILER_HOST || "smtp.gmail.com";
const nodemailerPort = process.env.NODEMAILER_PORT
  ? parseInt(process.env.NODEMAILER_PORT, 10)
  : 465;

const transporter = createTransport({
  service: nodemailerService,
  host: nodemailerHost,
  port: nodemailerPort,
  secure: true,
  auth: {
    user: nodemailerUser,
    pass: nodemailerPW,
  },
});

export default transporter;
