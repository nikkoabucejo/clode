import database from "@libraries/database";
import { cache } from "react";

const getCode = cache(async (id: ID) => {
  try {
    const code = await database.code.findUniqueOrThrow({
      where: { id },
    });

    return code;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred while fetching user data.");
  }
});

export default getCode;
