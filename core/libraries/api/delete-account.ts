import database from "@libraries/database";
import Grab from "@libraries/grab";
import api from ".";

const deleteAccount = async (id: ID) => {
  try {
    const user = await api.get.user();

    const deletedAccount = await database.account.delete({
      where: { id, AND: { userId: user.id } },
      select: { id: true },
    });

    return deletedAccount;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default deleteAccount;
