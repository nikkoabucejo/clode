import database from "@libraries/database";

const deleteAccount = async (id: ID) => {
  try {
    const deletedAccount = await database.account.delete({
      where: { id },
      select: { id: true },
    });

    return deletedAccount;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred while fetching user data.");
  }
};

export default deleteAccount;
