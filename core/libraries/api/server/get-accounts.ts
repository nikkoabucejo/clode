import database from "@core/libraries/database";
import { cache } from "react";
import Grab from "@core/utilities/grab";
import api from ".";

const getAccounts = cache(async () => {
  try {
    const user = await api.server.get.user();

    const accounts = await database.account.findMany({
      where: {
        userId: user?.id,
      },
    });

    return accounts;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
});

export default getAccounts;
