import auth from "@libraries/auth";
import database from "@libraries/database";

const getAccounts = async () => {
  try {
    const session = await auth();
    const email = session?.user?.email;

    if (!email) return null;

    const user = await database.user.findUnique({
      where: {
        email: email,
      },
    });

    const accounts = await database.account.findMany({
      where: {
        userId: user?.id,
      },
      select: {
        id: true,
        type: true,
        provider: true,
      },
    });

    return accounts;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
};

export default getAccounts;
