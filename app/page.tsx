import api from "@libraries/api";
import { SignIn, SignOut } from "@components/test";
import Code from "@components/code";

const Home: Page = async () => {
  const user = await api.get.user();
  const settings = await api.get.settings();
  const preferences = await api.get.preferences();

  return (
    <section className="p-16">
      <Code />
      <h1>Home</h1>
      <div>
        {user ? <SignOut>{`Welcome ${user.email}`}</SignOut> : <SignIn />}
      </div>
    </section>
  );
};

export default Home;
