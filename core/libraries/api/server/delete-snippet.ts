import database from "@core/libraries/database";
import Grab from "@core/utilities/grab";

const deleteSnippet = async (id: ID) => {
  try {
    const deletedSnippet = await database.snippet.delete({
      where: { id },
      select: { id: true },
    });

    return deletedSnippet;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default deleteSnippet;
