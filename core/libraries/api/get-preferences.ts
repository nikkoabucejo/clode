import database from "@libraries/database";
import { cache } from "react";
import api from ".";

const getPreferences = cache(async () => {
  try {
    console.log("preferences");
    const settings = await api.get.settings();

    if (!settings) return null;

    const preferences = await database.preferences.findUnique({
      where: {
        settingsId: settings.id,
      },
    });

    return preferences;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
});

export default getPreferences;
