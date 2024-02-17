import agent from "@libraries/agent";
import database from "@libraries/database";
import generate from "@libraries/generate";
import Grab from "@libraries/grab";

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

    const createCollection_Favorites = database.collection.create({
      data: { userId, name: "Favorites", isDefault: false },
      select: { id: true },
    });

    const createCollection_MyCollection = database.collection.create({
      data: {
        userId,
        name: "My Collection",
        isDefault: false,
        codes: {
          create: {
            title: "Add Function",
            description: "Add two numbers together.",
            language: "javascript",
            source: agent.encrypt("function add(a, b) {\n  return a + b;\n}"),
          },
        },
      },
    });

    const results = await Promise.all([
      updateUser,
      createSettings,
      createPreferences,
      createCollection_Favorites,
      createCollection_MyCollection,
    ]);

    const [
      updatedUser,
      createdSettings,
      createdPreferences,
      createdCollection_Favorites,
      createdCollection_MyCollection,
    ] = results;

    return {
      updatedUser,
      createdSettings,
      createdPreferences,
      createdCollection_Favorites,
      createdCollection_MyCollection,
    };
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default newUser;
