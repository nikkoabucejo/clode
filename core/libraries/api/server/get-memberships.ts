import database from "@libraries/database";
import { cache } from "react";
import api from "@libraries/api";
import Grab from "@libraries/grab";

const getMemberships = cache(async () => {
  try {
    const user = await api.server.get.user();

    const memberships = await database.membership.findMany({
      where: {
        userId: user.id,
      },
      include: {
        team: true,
      },
    });

    return memberships;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
});

export default getMemberships;
