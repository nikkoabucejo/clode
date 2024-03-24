import database from "@core/libraries/database";
import Grab from "@core/utilities/grab";
import schemas from "@core/schemas";
import { z } from "zod";

const createCollection = async (
  data: z.infer<typeof schemas.create.collection>,
) => {
  try {
    const createdCollection = await database.collection.create({
      data,
      select: { id: true },
    });

    return createdCollection;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default createCollection;
