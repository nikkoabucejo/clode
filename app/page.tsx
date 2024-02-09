import api from "@/core/libraries/api";
import { signIn, signOut } from "@/core/libraries/auth";

const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}>
      <p>You are not logged in</p>
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
};

const SignOut = ({ children }: { children: Children }) => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}>
      <div>{children}</div>
      <button type="submit">Sign out</button>
    </form>
  );
};

const Home: Page = async () => {
  const user = await api.get.user();

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
