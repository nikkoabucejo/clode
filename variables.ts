import { z } from "zod";

const variables = z.object({
  ENVIRONMENT: z.enum(["local", "development", "preview", "production"]),
  DOMAIN: z.string(),
  DATABASE_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
});

variables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof variables> {}
  }
}

export default variables;
