import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c50b43139d7ad7",
      pass: "91582be30d7943"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {

    await transport.sendMail({
       from: 'Feedget Team <hi@feedget.com',
       to: 'Laize Ferraz <laizeferraz@gmail.com',
       subject,
       html: body,
   })
    }
}