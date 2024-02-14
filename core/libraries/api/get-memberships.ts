import database from "@libraries/database";
import { cache } from "react";
import api from ".";

const getMemberships = cache(async () => {
  try {
    const user = await api.get.user();

    if (!user) return null;

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
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
});

export default getMemberships;
