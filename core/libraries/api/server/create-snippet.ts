import database from "@core/libraries/database";
import Grab from "@core/utilities/grab";
import schemas from "@core/schemas";
import { z } from "zod";

const createSnippet = async (data: z.infer<typeof schemas.create.snippet>) => {
  try {
    const createdSnippet = await database.snippet.create({
      data,
      select: { id: true },
    });

    return createdSnippet;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default createSnippet;
