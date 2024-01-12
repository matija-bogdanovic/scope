import { NextApiRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
   try {
      const { name, place, phone, email, companyname, interestedin } = await request.json();

      var transport = nodemailer.createTransport({
         host: "smtp.mailtrap.io",
         port: 2525,
         auth: {
            user: "2e83f8e1e764c6",
            pass: "5b0c34b33ee530"
         }
      });

      const mailOption = {
         from: 'matijabog45@gmail.com',
         to: 'matijabog45@gmail.com',
         subject: 'Scope',
         html: `
         <h3>Hello from Scope!</h3>
         <li>from: ${name}</li>
         <li>place: ${place}</li>
         <li>phone: ${phone}</li>
         <li>work email: ${email}</li>
         <li>company name: ${companyname}</li>
         <li>interested in: ${interestedin}</li>
         `
      };

      // Use async/await or handle it with promises
      await transport.sendMail(mailOption);

      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
   } catch (error) {
      console.error('error', error);
      return NextResponse.json({ message: 'Failed to Process Request' }, { status: 500 });
   }
}
