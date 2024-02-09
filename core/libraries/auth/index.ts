import GitHub from "next-auth/providers/github";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import database from "../database";
import callbacks from "./callbacks";
import pages from "./pages";

export const {
  handlers: { POST, GET },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(database),
  session: { strategy: "jwt" },
  providers: [GitHub],
  callbacks,
  pages,
});
