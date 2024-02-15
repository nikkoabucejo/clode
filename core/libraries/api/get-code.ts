import database from "@libraries/database";
import Grab from "@libraries/grab";
import { cache } from "react";

const getCode = cache(async (id: ID) => {
  try {
    const code = await database.code.findUniqueOrThrow({
      where: { id },
    });

    return code;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
});

export default getCode;
