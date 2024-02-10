import { z } from "zod";

const nextauth = {
  AUTH_SECRET: z.string(),
  AUTH_GITHUB_ID: z.string(),
  AUTH_GITHUB_SECRET: z.string(),
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),
  AUTH_DISCORD_ID: z.string(),
  AUTH_DISCORD_SECRET: z.string(),
};

const variables = z.object({
  ENVIRONMENT: z.enum(["local", "development", "preview", "production"]),
  DOMAIN: z.string(),
  DATABASE_URL: z.string(),
  ...nextauth,
});

variables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof variables> {}
  }
}

export default variables;
