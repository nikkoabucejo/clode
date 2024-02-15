import { z } from "zod";

const nextauth = {
  AUTH_SECRET: z.string(),
  AUTH_GITHUB_ID: z.string(),
  AUTH_GITHUB_SECRET: z.string(),
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),
  AUTH_DISCORD_ID: z.string(),
  AUTH_DISCORD_SECRET: z.string(),
  AUTH_EMAIL_SERVER_USER: z.string(),
  AUTH_EMAIL_SERVER_PASSWORD: z.string(),
  AUTH_EMAIL_SERVER_HOST: z.string(),
  AUTH_EMAIL_SERVER_PORT: z.string(),
  AUTH_EMAIL_FROM: z.string(),
};

const postgres = {
  POSTGRES_URL: z.string(),
  POSTGRES_PRISMA_URL: z.string(),
  POSTGRES_URL_NO_SSL: z.string(),
  POSTGRES_URL_NON_POOLING: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DATABASE: z.string(),
};

const variables = z.object({
  ENVIRONMENT: z.enum(["local", "development", "preview", "production"]),
  DOMAIN: z.string(),
  CRYPTO_KEY: z.string(),
  RESEND_API_KEY: z.string(),
  ...nextauth,
  ...postgres,
});

variables.parse(process.env);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof variables> {}
  }
}

export default variables;
