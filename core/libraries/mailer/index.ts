import { Resend } from "resend";
import templates from "./templates";

export { templates };

/**
 * @description Mailer instance with Resend.
 */
const mailer = new Resend(process.env.RESEND_API_KEY);

export default mailer;
