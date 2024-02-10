import { Resend } from "resend";

const mailer = new Resend(process.env.RESEND_API_KEY);

export default mailer;
