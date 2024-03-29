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

    const createCollections = await database.collection.createMany({
      data: [
        { userId, name: "Favorites", isDefault: true },
        { userId, name: "My Collection", isDefault: false },
      ],
    });

    const results = await Promise.all([
      updateUser,
      createSettings,
      createPreferences,
      createCollections,
    ]);

    const [
      updatedUser,
      createdSettings,
      createdPreferences,
      createdCollections,
    ] = results;

    return {
      updatedUser,
      createdSettings,
      createdPreferences,
      createdCollections,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
};

export default newUser;
