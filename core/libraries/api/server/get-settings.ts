import database from "@libraries/database";
import { cache } from "react";
import api from "@libraries/api";
import Grab from "@libraries/grab";

const getSettings = cache(async () => {
  try {
    const user = await api.server.get.user();

    const settings = await database.settings.findUniqueOrThrow({
      where: {
        userId: user.id,
      },
    });

    return settings;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
});

export default getSettings;
