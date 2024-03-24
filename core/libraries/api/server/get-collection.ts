import database from "@core/libraries/database";
import { cache } from "react";
import Grab from "@core/utilities/grab";

const getCollection = cache(async (id: ID) => {
  try {
    const collection = await database.collection.findUniqueOrThrow({
      where: { id },
    });

    return collection;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
});

export default getCollection;
