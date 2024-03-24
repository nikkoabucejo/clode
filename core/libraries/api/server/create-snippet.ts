import database from "@core/libraries/database";
import Grab from "@core/utilities/grab";
import schemas from "@core/schemas";
import { z } from "zod";

type Data = z.infer<typeof schemas.create.snippet>;

const createSnippet = async (data: Data) => {
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
