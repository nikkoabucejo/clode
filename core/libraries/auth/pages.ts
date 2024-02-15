import { type NextAuthConfig } from "next-auth";

const pages: NextAuthConfig["pages"] = {
  // signIn: "/auth/signin",
  // signOut: "/auth/signout",
  error: "/",
  // verifyRequest: "/auth/verify-request",
  // newUser: "/auth/new-user",
};

export default pages;
