import { PrismaClient } from "@prisma/client";

/**
 * @description Database instance with Prisma.
 */
const database = new PrismaClient();

export default database;
