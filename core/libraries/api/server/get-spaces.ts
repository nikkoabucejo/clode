import database from "@core/libraries/database";
import { cache } from "react";
import Grab from "@core/utilities/grab";
import api from ".";

const getSpaces = cache(async () => {
  try {
    const user = await api.server.get.user();

    const memberships = await database.membership.findMany({
      where: {
        userId: user.id,
      },
      include: {
        space: true,
      },
    });

    const spaces = memberships.map((membership) => membership.space);

    return spaces;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
});

export default getSpaces;
