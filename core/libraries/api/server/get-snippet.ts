import agent from "@libraries/agent";
import database from "@libraries/database";
import Grab from "@libraries/grab";
import { cache } from "react";

const getSnippet = cache(async (id: ID) => {
  try {
    const snippet = await database.snippet.findUniqueOrThrow({
      where: { id },
    });

    snippet.code = agent.decrypt(snippet.code);

    return snippet;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
});

export default getSnippet;
