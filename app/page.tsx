import api from "@libraries/api";
import { SignIn, SignOut } from "@components/test";
import auth from "@libraries/auth";

const Home: Page = async () => {
  const session = await auth();

  if (!session) {
    return <SignIn />;
  }

  const user = await api.server.get.user();
  const spaces = await api.server.get.spaces();
  const collections = await api.server.get.collections(spaces[0].id);

  console.log(collections);

  return (
    <section className="p-16">
      <h1>Home</h1>
      <div>
        <SignOut>{`Welcome ${user.email}`}</SignOut>
      </div>
    </section>
  );
};

export default Home;
