import { NextAuthConfig } from "next-auth";
import newUser from "./new-user";

const callbacks: NextAuthConfig["callbacks"] = {
  async signIn({ user, account, profile, email, credentials }) {
    return true;
  },
  async redirect({ url, baseUrl }) {
    return baseUrl;
  },
  async session({ session, user, token }) {
    return session;
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    if (user?.id && user?.email && isNewUser) {
      await newUser({ id: user.id, email: user.email });
    }

    return token;
  },
};

export default callbacks;
