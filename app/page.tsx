import api from "@libraries/api";
import { SignIn, SignOut } from "@components/test";
import auth from "@libraries/auth";
import Editor from "@components/editor";

const Home: Page = async () => {
  const session = await auth();

  if (!session) {
    return <SignIn />;
  }

  const user = await api.get.user();
  const collections = await api.get.collections();
  const code = await api.get.code(
    collections.find((collection) => collection.name === "My Collection")!
      .codes[0].id,
  );

  return (
    <section className="p-16">
      <h1>Home</h1>
      <div>
        <SignOut>{`Welcome ${user.email}`}</SignOut>
        <Editor code={code} />
      </div>
    </section>
  );
};

export default Home;
