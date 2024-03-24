import database from "@core/libraries/database";
import { cache } from "react";
import Grab from "@core/utilities/grab";
import api from ".";

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
