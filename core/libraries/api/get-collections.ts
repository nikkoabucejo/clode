import database from "@libraries/database";
import { cache } from "react";
import api from ".";

const getCollections = cache(async (teamId?: ID) => {
  try {
    const user = await api.get.user();

    if (!user) return null;

    const collections = await database.collection.findMany({
      where: {
        ...(teamId ? { teamId } : { userId: user.id }),
      },
      include: {
        codes: true,
        _count: {
          select: {
            codes: true,
          },
        },
      },
    });

    return collections;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
});

export default getCollections;
