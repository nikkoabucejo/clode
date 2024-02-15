import database from "@libraries/database";
import { cache } from "react";
import api from ".";
import Grab from "@libraries/grab";

const getPreferences = cache(async () => {
  try {
    const user = await api.get.user();

    const preferences = await database.preferences.findUniqueOrThrow({
      where: {
        userId: user.id,
      },
    });

    return preferences;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
});

export default getPreferences;
