import database from "@libraries/database";
import { cache } from "react";
import Grab from "@libraries/grab";

const getCollections = cache(async (spaceId: ID) => {
  try {
    const collections = await database.collection.findMany({
      where: { spaceId },
      include: {
        snippets: {
          select: {
            id: true,
            name: true,
            language: true,
          },
        },
        _count: {
          select: {
            snippets: true,
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
