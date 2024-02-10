import auth from "@libraries/auth";
import database from "@libraries/database";
import { cache } from "react";

const getAccounts = cache(async () => {
  try {
    const session = await auth();
    const email = session?.user?.email;

    if (!email) return null;

    const user = await database.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
      },
    });

    if (!user) return null;

    const accounts = await database.account.findMany({
      where: {
        userId: user?.id,
      },
    });

    return accounts;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
});

export default getAccounts;
