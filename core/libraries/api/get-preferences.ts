import database from "@libraries/database";
import { cache } from "react";
import api from ".";

const getPreferences = cache(async () => {
  try {
    const user = await api.get.user();

    if (!user) return null;

    const preferences = await database.preferences.findUnique({
      where: {
        userId: user.id,
      },
    });

    return preferences;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
});

export default getPreferences;
