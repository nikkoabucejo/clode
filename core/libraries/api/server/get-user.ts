import auth from "@libraries/auth";
import database from "@libraries/database";
import { redirect } from "next/navigation";
import { cache } from "react";

const getUser = cache(async () => {
  try {
    const session = await auth();
    const email = session?.user?.email;

    if (!email) throw new Error("No email found in session");

    const user = await database.user.findUniqueOrThrow({
      where: {
        email: email,
      },
    });

    return user;
  } catch (error) {
    redirect(`${process.env.ORIGIN_URL}/api/auth/signout`);
  }
});

export default getUser;
