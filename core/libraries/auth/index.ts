import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import callbacks from "./callbacks";
import pages from "./pages";
import database from "@core/libraries/database";
import providers from "./providers";

const {
  handlers: { POST, GET },
  auth,
  signIn,
  signOut,
} = NextAuth({
  debug: false,
  adapter: PrismaAdapter(database),
  session: { strategy: "jwt" },
  providers,
  callbacks,
  pages,
  trustHost: true,
});

export { POST, GET, signIn, signOut };

export default auth;
