import database from "@libraries/database";
import Grab from "@libraries/grab";
import { type Prisma } from "@prisma/client";

const createCode = async (data: Prisma.CodeCreateInput) => {
  try {
    const createdCode = await database.code.create({
      data,
      select: { id: true },
    });

    return createdCode;
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default createCode;
