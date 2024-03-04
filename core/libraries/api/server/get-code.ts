import agent from "@libraries/agent";
import database from "@libraries/database";
import Grab from "@libraries/grab";
import { cache } from "react";

const getCode = cache(async (id: ID) => {
  try {
    const code = await database.code.findUniqueOrThrow({
      where: { id },
    });

    code.source = agent.decrypt(code.source);

    return code;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
});

export default getCode;
