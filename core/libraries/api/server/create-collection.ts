import database from "@core/libraries/database";
import Grab from "@core/libraries/grab";
import schemas from "@core/schemas";
import { z } from "zod";

type Data = z.infer<typeof schemas.create.collection>;

const createCollection = async (data: Data) => {
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
