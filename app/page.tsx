import api from "@libraries/api";
import { BellIcon } from "@heroicons/react/16/solid";
import { SignIn, SignOut } from "@components/test";

const Home: Page = async () => {
  const user = await api.get.user();
  const settings = await api.get.settings();
  const preferences = await api.get.preferences();

  return (
    <section className="h-screen text-white">
      <h1>Home</h1>
      <div>
        {user ? <SignOut>{`Welcome ${user.email}`}</SignOut> : <SignIn />}
      </div>
      <BellIcon className="h-5 w-5 text-red-500" />
    </section>
  );
};

export default Home;
