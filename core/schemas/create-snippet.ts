import { Prisma } from "@prisma/client";
import { z } from "zod";

const createSnippet = z.object({
  name: z.string(),
  description: z.string(),
  language: z.string(),
  code: z.string(),
  collection: z.object({
    connect: z.object({
      id: z.string(),
    }),
  }),
}) satisfies z.ZodType<Prisma.SnippetCreateInput>;

export default createSnippet;
