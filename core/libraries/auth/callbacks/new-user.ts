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

    const createSpace = database.space.create({
      data: {
        name: "My Space",
        memberships: {
          create: [{ userId }],
        },
        collections: {
          createMany: {
            data: [{ name: "My Collection" }],
          },
        },
      },
      select: { id: true },
    });

    const results = await Promise.all([
      updateUser,
      createSettings,
      createPreferences,
      createSpace,
    ]);

    const [updatedUser, createdSettings, createdPreferences, createdSpace] =
      results;

    return {
      updatedUser,
      createdSettings,
      createdPreferences,
      createdSpace,
    };
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default newUser;
