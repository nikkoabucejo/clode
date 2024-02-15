import database from "@libraries/database";
import { cache } from "react";
import api from ".";

const getAccounts = cache(async () => {
  try {
    const user = await api.get.user();

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
    throw new Error("An unknown error occurred while fetching user data.");
  }
});

export default getAccounts;
