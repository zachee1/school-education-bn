import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { NotFoundError, InternalServerError } from '../utils/errorHandling';

dotenv.config();

const sendEmail = async (to: string, subject: string, text: string): Promise<void> => {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    throw new NotFoundError(
      'Gmail email or password is not provided in the environment variables.'
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user,
      pass
    }
  });

  const mailOptions = {
    from: user,
    to,
    subject,
    html: text
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new NotFoundError(error.message);
  }
};

export default sendEmail;
