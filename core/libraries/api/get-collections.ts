import database from "@libraries/database";
import { cache } from "react";
import api from ".";
import Grab from "@libraries/grab";

const getCollections = cache(async (teamId?: ID) => {
  try {
    const user = await api.get.user();

    const condition = teamId ? { teamId } : { userId: user.id };

    const collections = await database.collection.findMany({
      where: { ...condition },
      include: {
        codes: {
          select: {
            id: true,
            title: true,
            language: true,
          },
        },
        _count: {
          select: {
            codes: true,
          },
        },
      },
    });

    return collections;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
});

export default getCollections;
