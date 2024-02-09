import { NextAuthConfig } from "next-auth";
import database from "../database";

const callbacks: NextAuthConfig["callbacks"] = {
  async signIn({ user, account, profile, email, credentials }) {
    if (user?.email) {
      const self = await database.user.findUnique({
        where: {
          email: user.email,
        },
      });
      console.log(self);
    }
    return true;
  },
  async redirect({ url, baseUrl }) {
    return baseUrl;
  },
  async session({ session, user, token }) {
    return session;
  },
  async jwt({ token, user, account, profile }) {
    return token;
  },
};

export default callbacks;
