import database from "@libraries/database";
import { cache } from "react";
import Grab from "@libraries/grab";

const getSpace = cache(async (id: ID) => {
  try {
    const space = await database.space.findUniqueOrThrow({
      where: { id },
    });

    return space;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
});

export default getSpace;
