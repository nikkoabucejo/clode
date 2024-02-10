import auth from "@libraries/auth";
import database from "@libraries/database";

const getUser = async () => {
  try {
    const session = await auth();
    const email = session?.user?.email;

    if (!email) return null;

    const user = await database.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default getUser;
