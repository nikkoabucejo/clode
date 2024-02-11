import api from "@libraries/api";
import { SignIn, SignOut } from "../core/components/test";

const Home: Page = async () => {
  const user = await api.get.user();
  const settings = await api.get.settings();
  const preferences = await api.get.preferences();

  return (
    <section className="text-white">
      <h1>Home</h1>
      <div>
        {user ? <SignOut>{`Welcome ${user.email}`}</SignOut> : <SignIn />}
      </div>
    </section>
  );
};

export default Home;
