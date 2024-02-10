import database from "@libraries/database";
import { createId } from "@paralleldrive/cuid2";

type Payload = { id: ID; email: string };

const newUser = async ({ id, email }: Payload) => {
  try {
    const cuid = createId();
    const userId = id;
    const username = `${email.split("@")[0]}-${cuid}`;

    const updatedUser = await database.user.update({
      where: { id: userId },
      data: { username },
      select: { id: true },
    });

    const createdSettings = await database.settings.create({
      data: { userId },
      select: { id: true },
    });

    const createdPreferences = await database.preferences.create({
      data: { settingsId: createdSettings.id },
      select: { id: true },
    });

    return {
      updatedUser,
      createdSettings,
      createdPreferences,
    };
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default newUser;
