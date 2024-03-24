import api from "@core/libraries/api/server";
import { SignIn, SignOut } from "@core/components/test";
import auth from "@core/libraries/auth";
import Client from "./client";

const Home: Page = async () => {
  const session = await auth();

  if (!session) {
    return <SignIn />;
  }

  const user = await api.server.get.user();

  return (
    <section className="p-16">
      <h1>Home</h1>
      <Client />
      <div>
        <SignOut>{`Welcome ${user.email}`}</SignOut>
      </div>
    </section>
  );
};

export default Home;
