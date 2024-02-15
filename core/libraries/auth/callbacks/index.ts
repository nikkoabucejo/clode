import { NextAuthConfig } from "next-auth";
import newUser from "./new-user";

const callbacks: NextAuthConfig["callbacks"] = {
  async signIn({}) {
    return true;
  },
  async redirect({ baseUrl }) {
    return baseUrl;
  },
  async session({ session }) {
    return session;
  },
  async jwt({ token, user, isNewUser }) {
    if (user?.id && user?.email && isNewUser) {
      await newUser({ id: user.id, email: user.email });
    }

    return token;
  },
};

export default callbacks;
