import database from "@core/libraries/database";
import Grab from "@core/libraries/grab";

const deleteAccount = async (id: ID) => {
  try {
    const deletedAccount = await database.account.delete({
      where: { id },
      select: { id: true },
    });

    return deletedAccount;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default deleteAccount;
