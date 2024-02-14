import database from "@libraries/database";
import { cache } from "react";
import api from ".";

const getAccounts = cache(async () => {
  try {
    const user = await api.get.user();

    if (!user) return null;

    const accounts = await database.account.findMany({
      where: {
        userId: user?.id,
      },
    });

    return accounts;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
});

export default getAccounts;
