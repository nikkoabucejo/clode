import database from "@libraries/database";
import generate from "@libraries/generate";

type Payload = { id: ID; email: string };

/**
 * @description Execute this only when a user is newly created.
 */
const newUser = async ({ id, email }: Payload) => {
  try {
    const cuid = generate.id("cuid");
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

    const createCollections = [
      { name: "Favorites", isDefault: true },
      { name: "My Collection", isDefault: false },
    ].map(({ name, isDefault }) => {
      return database.collection.create({
        data: { userId, name, isDefault },
        select: { id: true },
      });
    });

    const results = await Promise.all([
      updateUser,
      createSettings,
      createPreferences,
      ...createCollections,
    ]);

    const [
      updatedUser,
      createdSettings,
      createdPreferences,
      ...createdCollections
    ] = results;

    return {
      updatedUser,
      createdSettings,
      createdPreferences,
      createdCollections,
    };
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default newUser;
