import mailer, { templates } from "@core/libraries/mailer";
import { type NextAuthConfig } from "next-auth";
import discord from "next-auth/providers/discord";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

const providers: NextAuthConfig["providers"] = [
  github,
  google,
  discord,
  // @ts-ignore - This will be fix in stable release of Auth.js
  {
    id: "resend",
    type: "email",
    async sendVerificationRequest({ identifier: email, url }) {
      try {
        await mailer.emails.send({
          from: process.env.AUTH_EMAIL_FROM,
          to: email,
          subject: "Clode - Login",
          text: `Magic Link: ${url}`,
          html: templates.magicLink({ url }),
        });
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
          throw new Error(error.message);
        }
      }
    },
  },
];

export default providers;
