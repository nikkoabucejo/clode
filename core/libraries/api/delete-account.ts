import database from "@libraries/database";

const deleteAccount = async (id: ID) => {
  try {
    const accountId = id;

    const deletedAccount = await database.account.delete({
      where: { id: accountId },
      select: { id: true },
    });

    return deletedAccount;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default deleteAccount;
