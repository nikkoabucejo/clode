import database from "@libraries/database";
import { createId } from "@paralleldrive/cuid2";

type Payload = { id: ID; email: string };

/**
 * @description Execute this only when a user is newly created.
 */
const newUser = async ({ id, email }: Payload) => {
  try {
    const cuid = createId();
    const userId = id;
    const username = `${email.split("@")[0]}-${cuid}`;

    const updateUser = database.user.update({
      where: { id: userId },
      data: { username },
      select: { id: true },
    });

    const createSettings = database.settings.create({
      data: { userId },
      select: { id: true },
    });

    const createPreferences = database.preferences.create({
      data: { userId },
      select: { id: true },
    });

    const results = await Promise.all([
      updateUser,
      createSettings,
      createPreferences,
    ]);

    const [updatedUser, createdSettings, createdPreferences] = results;

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
