import database from "@libraries/database";
import { cache } from "react";
import api from ".";

const getSettings = cache(async () => {
  try {
    const user = await api.get.user();

    if (!user) return null;

    const settings = await database.settings.findUnique({
      where: {
        userId: user.id,
      },
    });

    return settings;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
});

export default getSettings;
