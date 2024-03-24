import { Prisma } from "@prisma/client";
import { z } from "zod";

const createCollection = z.object({
  name: z.string(),
  space: z.object({
    connect: z.object({
      id: z.string(),
    }),
  }),
}) satisfies z.ZodType<Prisma.CollectionCreateInput>;

export default createCollection;
