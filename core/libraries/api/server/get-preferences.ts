import database from "@core/libraries/database";
import { cache } from "react";
import api from "@core/libraries/api";
import Grab from "@core/libraries/grab";

const getPreferences = cache(async () => {
  try {
    const user = await api.server.get.user();

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
